import React from 'react'
import { useState, useEffect } from 'react'

export const Todos = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const json = await response.json()
            console.log(json)
            setData(json)
            
        }
        fetchPost()
    }, [])
  
  return (
        <>
            {data.map((obj, ind)=>{
                return(<div key={ind}>{obj.title}</div>)
            })}
        </>
  )
}
