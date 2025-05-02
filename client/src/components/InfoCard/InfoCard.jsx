import React from 'react'
import './InfoCard.css'

export const InfoCard = ({dataInfo, category}) => {
  // const {name} = dataInfo;
  return (
    <div className='infoCard'>
      <h2>{dataInfo.name && dataInfo.name}</h2>
      <h2>{dataInfo.title && dataInfo.title}</h2>

      {category === 'films' &&
        <>
          <p>EPISODE {dataInfo.episode_id}</p>
          <p>Release on: {dataInfo.release_date}</p>
          <p>{dataInfo.opening_crawl}</p>
          {/* <p>Producer: {dataInfo.producer}</p> */}
          {/* <p>{dataInfo.planets}</p> */}
          {/* <p>{dataInfo.species}</p> */}
          {/* <p>{dataInfo.starships}</p> */}
          {/* <p>{dataInfo.starshipsvehicles}</p> */}
        </>
      }

      {category === 'people' &&
          <>
            <p>Birthday {dataInfo.birth_year}</p>
            <p>Eye color: {dataInfo.eye_color}</p>
            <p>Hair color: {dataInfo.hair_color}</p>
            <p>Height {dataInfo.height}</p>
            <p>Gender {dataInfo.gender}</p>
            <p>Mass {dataInfo.mass}</p>
            <p>Species {dataInfo.species}</p>
            <p>{dataInfo.opening_crawl}</p>
            {/* <p>Films: {dataInfo.films}</p> */}
            {/* <p>{dataInfo.starships}</p> */}
            {/* <p>{dataInfo.vehicles}</p> */}
            {/* <p>Species: {dataInfo.species}</p> */}
          </>
        }

        {category === 'vehicles' &&
            <>
              <p>Consumables {dataInfo.consumables}</p>
              <p>cost in credits: {dataInfo.cost_in_credits}</p>
              <p>Crew: {dataInfo.crew}</p>
              <p>Length {dataInfo.length}</p>
              <p>manufacturer {dataInfo.manufacturer}</p>
              <p>max atmosphering speed {dataInfo.max_atmosphering_speed
              }</p>
              <p>model: {dataInfo.model}</p>
              <p>Passengers: {dataInfo.passengers}</p>
              <p>Vehicle class: {dataInfo.vehicle_class}</p>
              {/* <p>Films: {dataInfo.films}</p> */}
              {/* <p>{dataInfo.pilots}</p> */}
            </>
          }
    </div>
  )
}
