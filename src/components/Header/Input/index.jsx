import React, { useContext } from 'react'
import { SearchContext } from '../../App';
import s from './Input.module.css'

export const Input = () => {
  const {searchItem, setSearchItem, setPagiNum} = useContext(SearchContext)
  console.log(searchItem);
  return (
    <input
    value={searchItem}
    onClick ={()=>{setPagiNum(1)}}
    onChange={(e)=>{setSearchItem(e.target.value)}}
    type="text" placeholder='type country'/>
  )
}
