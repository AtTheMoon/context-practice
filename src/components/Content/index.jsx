import React, { useContext } from 'react'
import { SearchContext } from '../App'
import { Pagination } from '../Pagination'
import { CountryItem } from './Countryitem'
import { Skeleton } from './Countryitem/Skeleton'

export const Content = () => {
  const {items, searchItem, isLoading, page, setPage, pagiArr} = useContext(SearchContext)


  return (
    <div className='country-list'>
      {
        isLoading ?
        [...new Array(3)].map(item=>{
          return(<Skeleton />)
        }):
        items.map(item=>{
          return <CountryItem {...item}/>
        })
      }

      <Pagination arr={pagiArr} page={page} setPage={setPage}/>
    </div>
  )
}