import React, { useContext } from 'react'
import s from './Header.module.scss'
import { Input } from './Input'
import { SearchContext } from '../App';

export const Header = () => {
  const {setParametr} = useContext(SearchContext)
  return (
    <div className={s.header}>
      <div className={s.header__logo}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111557.png" alt="" /></div>
      <Input/>
      <button className={s.header__btn_up} onClick={()=>{setParametr('asc')}}>По возрастанию</button>
      <button className={s.header__btn_down} onClick={()=>{setParametr('desc')}}>По убыванию</button>
      <div className={s.header__menu}>
        <div className={s.header__link}>Home</div>
        <div className={s.header__link}>About</div>
        <div className={s.header__link}>More</div>
      </div>
    </div>
  )
}
