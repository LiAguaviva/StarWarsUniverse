import React, { useRef } from 'react'
import './InfoCard.css'
import brokenImg from '../../assets/brokenImg.jpg'
import { getIdFromUrl } from '../../utils/utils';

export const InfoCard = ({dataInfo, category}) => {

  const {name, url} = dataInfo;

  const imgRef = useRef();

  const useBrokenImg = () => {
    imgRef.current.src = brokenImg
  }

  return (
    <div className='infoCard'>
      <h2>{dataInfo.name && dataInfo.name}</h2>
      <h2>{dataInfo.title && dataInfo.title}</h2>
      <img 
        src={`https://starwars-visualguide.com/assets/img/${category==="people"?"characters":category}/${getIdFromUrl(url)}.jpg`}  
        alt="" 
        onError={useBrokenImg}
        ref={imgRef}
      />

      {category === 'films' &&
        <>
          <p>EPISODE {dataInfo.episode_id}</p>
          <p>Release on: {dataInfo.release_date}</p>
          <p>{dataInfo.opening_crawl}</p>
          <p>Producer: {dataInfo.producer}</p>
          <p>{dataInfo.planets}</p>
          <p>{dataInfo.species}</p>
          <p>{dataInfo.starships}</p>
          <p>{dataInfo.starshipsvehicles}</p>
        </>
      }

      {category === 'people' &&
          <>
            <p>Birthday: {dataInfo.birth_year}</p>
            <p>Eye color: {dataInfo.eye_color}</p>
            <p>Hair color: {dataInfo.hair_color}</p>
            <p>Height: {dataInfo.height}</p>
            <p>Gender: {dataInfo.gender}</p>
            <p>Mass: {dataInfo.mass}</p>
            <p>Species: {dataInfo.species}</p>
            <p>{dataInfo.opening_crawl}</p>
            <p>Films: {dataInfo.films}</p>
            <p>{dataInfo.starships}</p>
            <p>{dataInfo.vehicles}</p>
            <p>Species: {dataInfo.species}</p>
          </>
        }

        {category === 'vehicles' &&
            <>
              <p>Consumables: {dataInfo.consumables}</p>
              <p>cost in credits: {dataInfo.cost_in_credits}</p>
              <p>Crew: {dataInfo.crew}</p>
              <p>Length: {dataInfo.length}</p>
              <p>manufacturer: {dataInfo.manufacturer}</p>
              <p>max atmosphering speed: {dataInfo.max_atmosphering_speed
              }</p>
              <p>model: {dataInfo.model}</p>
              <p>Passengers: {dataInfo.passengers}</p>
              <p>Vehicle class: {dataInfo.vehicle_class}</p>
              <p>Films: {dataInfo.films}</p>
              <p>{dataInfo.pilots}</p>
            </>
          }

          {category === 'species' &&
              <>
                <p>Average height: {dataInfo.average_height}</p>
                <p>Average lifespan: {dataInfo.average_lifespan}</p>
                <p>Classification: {dataInfo.classification}</p>
                <p>designation: {dataInfo.designation}</p>
                <p>eye colors: {dataInfo.eye_colors}</p>
                <p>hair colors: {dataInfo.hair_colors}</p>
                <p>skin colors: {dataInfo.skin_colors}</p>
                <p>homeworld: {dataInfo.homeworld}</p>
                <p>language: {dataInfo.language}</p>
                <p>people: {dataInfo.people}</p>
              </>
            }

            {category === 'starships' &&
                <>
                  <p>MGLT: {dataInfo.MGLT}</p>
                  <p>consumables: {dataInfo.consumables}</p>
                  <p>cost in credits: {dataInfo.cost_in_credits}</p>
                  <p>films: {dataInfo.films}</p>
                  <p>hyperdrive rating: {dataInfo.hyperdrive_rating}</p>
                  <p>length: {dataInfo.length}</p>
                  <p>manufacturer: {dataInfo.manufacturer}</p>
                  <p>max atmosphering speed: {dataInfo.max_atmosphering_speed}</p>
                  <p>model: {dataInfo.model}</p>
                  <p>passengers: {dataInfo.passengers}</p>
                  <p>starship class: {dataInfo.starship_class}</p>
                </>
              }
    </div>
  )
}
