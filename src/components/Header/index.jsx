import React, { useContext } from 'react'
import s from './Header.module.scss'
import { Input } from './Input'
import { SearchContext } from '../App';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const {setParametr} = useContext(SearchContext)

  return (
    <div className={s.header}>
      <Link to={'/'} className={s.header__logo}><img src="https://cdn-icons-png.flaticon.com/512/2111/2111557.png" alt="" /></Link>
      <Input/>
      <button className={s.header__btn_up} onClick={()=>{setParametr('asc')}}>По возрастанию</button>
      <button className={s.header__btn_down} onClick={()=>{setParametr('desc')}}>По убыванию</button>
      <div className={s.header__menu}>
        <NavLink to={'/home'} className={({isActive})=>isActive ? s.active : s.header__link}>Home</NavLink>
        <NavLink to={'/about'} className={({isActive})=>isActive ? s.active : s.header__link}>About</NavLink>
        <NavLink to={'/more'} className={({isActive})=>isActive ? s.active : s.header__link}>More</NavLink>
      </div>
    </div>
  )
}
