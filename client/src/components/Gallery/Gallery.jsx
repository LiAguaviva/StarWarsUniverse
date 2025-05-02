import React from 'react'
import './Gallery.css'
import { GalleryCard } from '../GalleryCard/GalleryCard'

export const Gallery = ({data, selectItem, category}) => {
  
  return (
    <div className='gallery'>
      {data.results.map((elem, idx) => {
        return(
          <GalleryCard 
            key={idx} 
            elem={elem}
            selectItem={selectItem}
            category={category}
          />
        )
      })}
    </div>
  )
}
