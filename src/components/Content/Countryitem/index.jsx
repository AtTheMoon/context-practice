import React from 'react'
import s from './CountryItem.module.scss'

export const CountryItem = ({ title, flag, price}) => {
    
  return (
    <div className={s.item}>
      <div className={s.item__img}>
        <img src={flag} alt="" />
      </div>
      <h1 className={s.item__title}>{title} <span>{price}</span> $</h1>
    </div>
  )
}