import React, { useContext } from 'react'
import { SearchContext } from '../App'
import { CountryItem } from './Countryitem'

export const Content = () => {
  const {items, searchItem} = useContext(SearchContext)


  return (
    <div className='country-list'>
      {
        items.map(item=>{
          return(<CountryItem key ={item.id} {...item}/>)
        })
      }
    </div>
  )
}