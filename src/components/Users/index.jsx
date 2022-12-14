import React from 'react'
import { useState, useEffect } from 'react'

export const Users = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const json = await response.json()
            console.log(json)
            setData(json)
            
        }
        fetchPost()
    }, [])
  
  return (
        <>
            {data.map((obj, ind)=>{
                return(<div key={ind}>{obj.email}</div>)
            })}
        </>
  )
}
