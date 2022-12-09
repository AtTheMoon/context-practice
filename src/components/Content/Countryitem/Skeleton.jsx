import React from "react"
import ContentLoader from "react-content-loader"
import s from './Skeleton.module.scss'

export const Skeleton = () => {
  // <ContentLoader 
  //   speed={1}
  //   width={370}
  //   height={200}
  //   viewBox="0 0 370 200"
  //   backgroundColor="#red"
  //   foregroundColor="#ecebeb"
  // >
  //    <rect x="572" y="262" rx="0" ry="0" width="12" height="21" /> 
  //   <rect x="534" y="140" rx="0" ry="0" width="119" height="109" /> 
  //   <rect x="73" y="9" rx="0" ry="0" width="198" height="117" /> 
  //   <rect x="44" y="155" rx="0" ry="0" width="147" height="25" /> 
  //   <rect x="206" y="153" rx="0" ry="0" width="93" height="26" />
  // </ContentLoader>
  return(
  <div className={s.skeleton}>
  <div className={s.skeleton__img}></div>
  <div className={s.skeleton__name}></div>
</div>
  )
}
