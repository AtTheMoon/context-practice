import React, { createContext, useContext, useState } from 'react'
import { Content } from '../Content'
import { Header } from '../Header'
import './App.scss'

const countries = [
  {id: 1, title: 'France', flag: 'https://www.worldometers.info/img/flags/small/tn_fr-flag.gif'},
  {id: 2, title: 'Argentina', flag: 'https://www.worldometers.info/img/flags/small/tn_ar-flag.gif'},
  {id: 3, title: 'Canada', flag: 'https://www.worldometers.info/img/flags/small/tn_ca-flag.gif'},
  {id: 4, title: 'China', flag: 'https://www.worldometers.info/img/flags/small/tn_ch-flag.gif'},
  {id: 5, title: 'Germany', flag: 'https://www.worldometers.info/img/flags/small/tn_gm-flag.gif'},
  {id: 6, title: 'Greece', flag: 'https://www.worldometers.info/img/flags/small/tn_gr-flag.gif'},
  {id: 7, title: 'Japan', flag: 'https://www.worldometers.info/img/flags/small/tn_ja-flag.gif'},
  {id: 8, title: 'USA', flag: 'https://www.worldometers.info/img/flags/small/tn_us-flag.gif'}
]

export const SearchContext = createContext()

export const App = () => {
  const [items, setItems] = useState(countries)
  const [searchItem, setSearchItem] = useState('')
  return (
    <SearchContext.Provider value={{searchItem, setSearchItem, items}}>
    <div className="container">
        <Header/>
        <Content/>
    </div>
    </SearchContext.Provider>
  )
}
