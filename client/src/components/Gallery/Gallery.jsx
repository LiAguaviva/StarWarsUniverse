import React from 'react'
import './Gallery.css'
import previous from '../../assets/arrow_back.png'
import next from '../../assets/arrow_forward.png'
import { GalleryCard } from '../GalleryCard/GalleryCard'

export const Gallery = ({data, selectItem, category, handlePage}) => {

  return (
    <div className='gallery'>
      {data.previous && 
        <img 
          src={previous} 
          onClick={()=>handlePage(data.previous)}
          alt="" 
          className='arrow'
        />}
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
      {data.next && 
        <img 
          src={next}
          onClick={()=>handlePage(data.next)} 
          alt="" 
          className='arrow' 
        />}
    </div>
  )
}
