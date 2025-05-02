import React from 'react'
import './GalleryCard.css'

export const GalleryCard = ({elem, selectItem}) => {

  const selectCard = () => {
    selectItem(elem)
  }
  return (
    <div 
      className='GalleryCard'
      onClick={selectCard}
    >
      <p>{elem.name}</p>
      <p>{elem.title}</p>
    </div>
  )
}
