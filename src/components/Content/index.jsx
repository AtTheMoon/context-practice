import React, { useContext } from 'react'
import { SearchContext } from '../App'
import { CountryItem } from './Countryitem'

export const Content = () => {
  const {items, searchItem} = useContext(SearchContext)
  const countries = items
  .filter(item=>{
    if(item.title.toLowerCase().includes(searchItem) || item.title.includes(searchItem)){
      return item
    }
  })
  .map(item => {
    return <CountryItem {...item} />
  })

  return (
    <div className='country-list'>
      {
        countries
      }
    </div>
  )
}