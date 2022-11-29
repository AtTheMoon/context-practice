import React, { useContext } from 'react'
import { SearchContext } from '../../App';
import s from './Input.module.css'

export const Input = () => {
  const {searchItem, setSearchItem} = useContext(SearchContext)
  console.log(searchItem);
  return (
    <input
    value={searchItem}
    onChange={(e)=>{setSearchItem(e.target.value)}}
    type="text" placeholder='type country'/>
  )
}
