import React, { useRef } from 'react'
import './GalleryCard.css'
import brokenImg from '../../assets/brokenImg.jpg'
import { getIdFromUrl } from '../../utils/utils'

export const GalleryCard = ({elem, selectItem, category}) => {

  const selectCard = () => {
    selectItem(elem)
  }

  const imgRef = useRef()

  const useBrokenImg = () => {
    imgRef.current.src = brokenImg;
  }

  return (
    <div 
      className='GalleryCard'
      onClick={selectCard}
    >
     
      <img 
        src={`https://starwars-visualguide.com/assets/img/${category==="people"?"characters":category}/${getIdFromUrl(elem.url)}.jpg`}  
        alt="" 
        ref={imgRef}
        onError={useBrokenImg}
      />

    <p>{elem.name}</p>
    <p>{elem.title}</p>
    </div>
  )
}
