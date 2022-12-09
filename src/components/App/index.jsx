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
  const [pagiArr, setPagiArr] = useState([])
  const [page, setPage] = useState(1)

  // useEffect(()=>{
  //   const fetchCountries = async()=>{
  //     const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
  //     setItems(res.data)
  //     setPagiNum(Math.ceil(res.data.length / 3))
  //   }
  //   fetchCountries() 
  // },[])

  // useEffect(()=>{
  //   const fetchCountries = async()=>{
  //     const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?sortBy=price&order=${parametr}&search=${searchItem}`)
  //     setNum(res.data.length)
  //   }
  //   fetchCountries() 
  // },[])

  useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items?page=${page}&limit=3&sortBy=price&order=${parametr}&search=${searchItem}`)
      setItems(res.data)
    }
    fetchCountries() 
  },[searchItem, parametr, page])

  useEffect(()=>{
    const fetchCountries = async()=>{
      const res = await axios.get(`https://6386df3fe399d2e473eed468.mockapi.io/items`)
      console.log(res.data.length);
      const btnsPg = Math.ceil(res.data.length / 3)
      setPagiArr([...new Array(btnsPg).fill(1)])
    }
    fetchCountries()
  },[])

  // console.log(num)

  // for(let i = 1; i <=  Math.ceil(num / 3); i++){
  //   if(pagiArr.length <= Math.ceil(num / 3)){
  //     pagiArr.push(i)
  //   } 
  // }

  // if(pagiArr.length > Math.ceil(num / 3)){
  //   pagiArr.pop()
  // }

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



  // const getValue = (arg) =>{
  //   setPagiNum(arg)
  //   // if(arg === pagiNum){
  //   //   setIsActive(true)
  //   //   console.log('hi');
  //   // }else{
  //   //   setIsActive(false)
  //   // }
  // }

  // const number = 5
  // const arr = new Array(number).fill('Ermek-superman')
  // console.log(arr)

  return (
    <SearchContext.Provider value={{searchItem, setSearchItem, items, setParametr, setPage}}>
    <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Content/>}></Route>
        </Routes>
        <div className="pagi__block">
          {
            pagiArr.map((_, ind)=>{
              return (
                <button className='pagi__btn'
                style={{backgroundColor: page==ind+1 ? 'red' : ''}}
                  onClick={()=>{setPage(ind+1)}} 
                  key={ind}>{ind + 1}</button>
              )
            })
          }
        </div>
    </div>
    </SearchContext.Provider>
  )
  }