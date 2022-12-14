import React from 'react'
import '../../components/App/App.scss'

export const Pagination = ({arr, page, setPage}) => {
  console.log(arr);
  return (
    <div className="pagi__block">
    {
      arr.map((_, ind)=>{
        return (
          <button className='pagi__btn'
          style={{backgroundColor: page==ind+1 ? 'red' : ''}}
            onClick={()=>{setPage(ind+1)}} 
            key={ind}>{ind + 1}</button>
        )
      })
    }
  </div>
  )
}
