import React, { useContext } from 'react'
import { SearchContext } from '../../App';
import s from './Input.module.css'

export const Input = () => {
  const {searchItem, setSearchItem, setPage} = useContext(SearchContext)
  return (
    <input
    value={searchItem}
    onClick ={()=>{setPage(1)}}
    onChange={(e)=>{setSearchItem(e.target.value)}}
    type="text" placeholder='type country'/>
  )
}
