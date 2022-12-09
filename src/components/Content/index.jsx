import React, { useContext } from 'react'
import { SearchContext } from '../App'
import { CountryItem } from './Countryitem'
import { Skeleton } from './Countryitem/Skeleton'

export const Content = () => {
  const {items, searchItem} = useContext(SearchContext)


  return (
    <div className='country-list'>
      {
        items.map(item=>{
          return(<Skeleton />)
        })
      }
    </div>
  )
}