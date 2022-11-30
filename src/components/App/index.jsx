import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Content } from '../Content'
import { Header } from '../Header'
import './App.scss'
import {Routes, Route} from 'react-router-dom'

// const countries = [
//   {id: 1, title: 'France', flag: 'https://www.worldometers.info/img/flags/small/tn_fr-flag.gif'},
//   {id: 2, title: 'Argentina', flag: 'https://www.worldometers.info/img/flags/small/tn_ar-flag.gif'},
//   {id: 3, title: 'Canada', flag: 'https://www.worldometers.info/img/flags/small/tn_ca-flag.gif'},
//   {id: 4, title: 'China', flag: 'https://www.worldometers.info/img/flags/small/tn_ch-flag.gif'},
//   {id: 5, title: 'Germany', flag: 'https://www.worldometers.info/img/flags/small/tn_gm-flag.gif'},
//   {id: 6, title: 'Greece', flag: 'https://www.worldometers.info/img/flags/small/tn_gr-flag.gif'},
//   {id: 7, title: 'Japan', flag: 'https://www.worldometers.info/img/flags/small/tn_ja-flag.gif'},
//   {id: 8, title: 'USA', flag: 'https://www.worldometers.info/img/flags/small/tn_us-flag.gif'}
// ]





export const SearchContext = createContext()

export const App = () => {
  const [items, setItems] = useState([])
  const [searchItem, setSearchItem] = useState('')

  useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get('http://localhost:9999/countries')
      setItems(res.data)
    }
    fetchCountries()
  },[])

  // useEffect(()=>{
  //       const HOST = 'http://localhost:9999'
  //       async function getData (route){
  //         const res = await fetch(`${HOST}/${route}`)
  //         const json = await res.json()
  //         setItems(json)
  //       } 
  //       getData('countries')
  // }, [])

  // console.log(items)

  return (
    <SearchContext.Provider value={{searchItem, setSearchItem, items}}>
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Content/>}></Route>
        </Routes>
    </div>
    </SearchContext.Provider>
  )
}
