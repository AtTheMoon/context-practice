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
  const [parametr, setParametr] = useState('asd')
  const [pagiNum, setPagiNum] = useState(1)
  const [pagiArr, setPagiArr] = useState([])
  const [num, setNum] = useState(0)

  // useEffect(()=>{
  //   const fetchCountries = async()=>{
  //     const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
  //     setItems(res.data)
  //     setPagiNum(Math.ceil(res.data.length / 3))
  //   }
  //   fetchCountries() 
  // },[])

  useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
      setNum(res.data.length)
    }
    fetchCountries() 
  },[])

  useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?page=${pagiNum}&limit=3&sortBy=price&order=${parametr}&search=${searchItem}`)
      setItems(res.data)
    }
    fetchCountries() 
    return(()=>{
      setPagiArr([])
    })
  },[searchItem, parametr, pagiNum])

  // console.log(num)

  for(let i = 1; i <=  Math.ceil(num / 3); i++){
    if(pagiArr.length <= Math.ceil(num / 3)){
      pagiArr.push(i)
    } 
  }

  if(pagiArr.length > Math.ceil(num / 3)){
    pagiArr.pop()
  }

  // console.log(pagiArr)

  // useEffect(()=>{
  //       const HOST = 'http://localhost:9999'
  //       async function getData (route){
  //         const res = await fetch(`${HOST}/${route}`)
  //         const json = await res.json()
  //         setItems(json)
  //       } 
  //       getData('countries')
  // }, [])

  const getValue = (arg) =>{
    setPagiNum(arg)
    console.log('hi')
  }

  console.log(pagiNum)
  return (
    <SearchContext.Provider value={{searchItem, setSearchItem, items, setParametr}}>
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Content/>}></Route>
        </Routes>
        <div className="pagi__block">
        {pagiArr.map((num, ind)=>
          <button className='pagi__btn' value={num}  onClick={(e)=>{getValue(e.target.value)}}  key={ind}>{num}</button>
        )}
        </div>
    </div>
    </SearchContext.Provider>
  )
  }