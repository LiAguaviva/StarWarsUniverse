import React, { useEffect, useRef, useState } from 'react'
import './InfoCard.css'
import brokenImg from '../../assets/brokenImg.jpg'
import { getIdFromUrl } from '../../utils/utils';
import axios from 'axios';

export const InfoCard = ({dataInfo, category}) => {

  const {url} = dataInfo;
  
  const [homeworld, setHomeworld] = useState('unknown')
  const [relatedData, setRelatedData] = useState({
    films: [],
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  })

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setHomeworld(res.dataInfo.homeworld)
      })
      .catch((error) => {
        console.log(error);
        
      })
  }, [])

  useEffect(() => {
    const categoriesToFetch = ['characters', 'planets', 'species', 'starships', 'vehicles', 'films'];
  
    const fetchRelatedData = async () => {
      const newData = {};
  
      for (let category of categoriesToFetch) {
        if (dataInfo[category]?.length > 0) {
          try {
            const responses = await Promise.all(
              dataInfo[category].map(url => axios.get(url))
            );
            newData[category] = responses.map(res => ({
              name: res.data.name || res.data.title,
              url: res.config.url
            }));
          } catch (err) {
            console.error(`Error fetching ${category}:`, err);
            newData[category] = ['Error'];
          }
        } else {
          newData[category] = [];
        }
      }
  
      setRelatedData(newData);
    };
  
    if (dataInfo?.url) {
      fetchRelatedData();
    }
  
  }, [dataInfo]);

  const imgRef = useRef();

  const useBrokenImg = (e) => {
    // if (!e.target.src.includes('brokenImg.jpg')){
      imgRef.current.src = brokenImg
    // }
  }

  // console.log('src:::::', `images/${category}/${getIdFromUrl(url)}.jpg`);
  // console.log('/////////////////////////////////', `images/people/${getIdFromUrl(url)}.jpg`);

  console.log('datainfo', dataInfo);
  console.log('homeworld', homeworld);
  // console.log('charUrl:', charUrl);
  

  return (
    <div className='infoCard'>
      <h2>{dataInfo.name && dataInfo.name}</h2>
      <h2>{dataInfo.title && dataInfo.title}</h2>
      <img 
        src={`images/${category}/${getIdFromUrl(url)}.jpg`}  
          
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
          <p>Characters: {relatedData.characters.join(', ')}</p>
          {relatedData.characters.length > 0 && (
            <div>
              <h3>Characters:</h3>
              <div className="related-gallery">
                {relatedData.characters.map((char, i) => (
                  <>
                  {char.name}
                  <img 
                    key={i}
                    src={`images/people/${getIdFromUrl(char.url)}.jpg`}
                    alt=""
                    onError={useBrokenImg}
                    className="related-img"
                  />
                  </>
                ))}
              </div>
            </div>
          )}
          <p>Planets: {relatedData.planets.join(', ')}</p>
          <p>Species: {relatedData.species.join(', ')}</p>
          <p>Starships: {relatedData.starships.join(', ')}</p>
          <p>Vehicles: {relatedData.vehicles.join(', ')}</p>
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
            {/* <p>Homeworld: {dataInfo.homeworld}</p> */}
            
            <p>Films: {relatedData.films.join(', ')}</p>
            <p>Starships: {relatedData.starships.join(', ')}</p>
            <p>Planets: {relatedData.planets.join(', ')}</p>
            <p>Vehicles: {relatedData.vehicles.join(', ')}</p>
            <p>Species: {relatedData.species.join(', ')}</p>
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

            {category === 'planets' &&
              <>
                <p>climate: {dataInfo.climate}</p>
                <p>diameter: {dataInfo.diameter}</p>
                <p>Classification: {dataInfo.classification}</p>
                <p>films: {dataInfo.films}</p>
                <p>gravity: {dataInfo.gravity}</p>
                <p>orbital period: {dataInfo.orbital_period}</p>
                <p>population: {dataInfo.population}</p>
                <p>residents: {dataInfo.residents}</p>
                <p>rotation period: {dataInfo.rotation_period}</p>
                <p>surface water: {dataInfo.surface_water}</p>
                <p>terrin: {dataInfo.terrin}</p>
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
