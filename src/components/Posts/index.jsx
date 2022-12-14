import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination } from './../Pagination'
import { useNavigate } from 'react-router-dom'
import '../../components/App/App.scss'

export const Posts = ({isBtnVisible}) => {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [btns, setBtns] = useState([])
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const json = await response.json()
            const btnsPg = Math.ceil(json.length / limit)
            setBtns([...new Array(btnsPg).fill(1)])
        }
        fetchPost()
    }, [])

    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
            const json = await response.json()
            console.log(json)
            setData(json)
        }
        fetchPost()
    },[limit, page])

    if(!isBtnVisible){
        return (
            <React.Fragment>
                    {data.map((obj, ind)=>{
                        return(<div key={ind}>{obj.title}</div>)
                    })}
            </React.Fragment>
          )
    }

    return (
        <React.Fragment>
            <div className="limit__btns">
            <button onClick={()=>{navigate(-1)}}>Go back</button>
            <button className='limit__btn' onClick={()=>{setLimit(10)}}>10</button>
            <button className='limit__btn' onClick={()=>{setLimit(15)}}>15</button>
            <button className='limit__btn' onClick={()=>{setLimit(20)}}>20</button>
            </div>
            {data.map((obj, ind)=>{
                return(<div key={ind}>{obj.title}</div>)
            })}
            <Pagination arr={btns} page={page} setPage={setPage}/>
        </React.Fragment>
    )

}
