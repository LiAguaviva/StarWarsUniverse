import axios from 'axios';
import { useEffect, useState } from 'react'
import { getIdFromUrl } from '../../utils/utils';
import { DataFilms } from './DataFilms';
import { DataCharacters } from './DataCharacters';
import { DataVehicles } from './DataVehicles';
import { DataSpecies } from './DataSpecies';
import { DataPlanets } from './DataPlanets';
import { DataStarships } from './DataStarships';
import './InfoCard.css'

export const InfoCard = ({dataInfo, category, handleNavigation}) => {

  const {url} = dataInfo;
  
  const [relatedData, setRelatedData] = useState({
    films: [],
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    pilots: [],
    homeworld: [],
  })


  useEffect(() => {
    const categoriesToFetch = [
      'films', 'characters', 'planets', 'species', 'starships', 'vehicles', 'pilots', 'homeworld'
    ];

    const fetchRelatedData = async () => {
  const newData = {};

  for (let category of categoriesToFetch) {
    let dataKey;

    if (category === 'characters') {
      if (dataInfo.people) {
        dataKey = 'people';
      } else if (dataInfo.residents) {
        dataKey = 'residents';
      } else if (dataInfo.characters) {
        dataKey = 'characters';
      } else {
        dataKey = null;
      }
    } else {
      dataKey = category;
    }

    // Caso especial para 'homeworld', que es un string
    if (category === 'homeworld' && typeof dataInfo.homeworld === 'string') {
      try {
        const res = await axios.get(dataInfo.homeworld);
        newData.homeworld = [{
          name: res.data.name,
          url: res.config.url
        }];
      } catch (err) {
        console.error(`Error fetching homeworld:`, err);
        newData.homeworld = ['Error'];
      }
    }

    // Resto de casos normales (arrays de URLs)
    else if (dataKey && Array.isArray(dataInfo[dataKey]) && dataInfo[dataKey].length > 0) {
      try {
        const responses = await Promise.all(
          dataInfo[dataKey].map(url => axios.get(url))
        );
        newData[category] = responses.map(res => ({
          name: res.data.name || res.data.title,
          url: res.config.url
        }));
      } catch (err) {
        console.error(`Error fetching ${category}:`, err);
        newData[category] = ['Error'];
      }
    } else if (category !== 'homeworld') {
      // Evita sobrescribir si ya se ha resuelto en el caso especial
      newData[category] = [];
    }
  }

  setRelatedData(newData);
};

    if (dataInfo?.url) {
      fetchRelatedData();
    }
  
  }, [dataInfo]);


  const useBrokenImg = (e) => {
    if (!e.target.src.includes('brokenImg.jpg')) {
      e.target.src = 'images/brokenImg.jpg';
    }
  }
  
  return (
    <div className='infoCard'>
        <img 
          src={`images/${category}/${getIdFromUrl(url)}.jpg`}  
          className='infoImg'
          alt="" 
          onError={useBrokenImg}
          />

      <h2>{dataInfo.name && dataInfo.name}</h2>
      <h2>{dataInfo.title && dataInfo.title}</h2>

      {category === 'films' &&
          <DataFilms 
            dataInfo={dataInfo} 
            relatedData={relatedData}
            useBrokenImg={useBrokenImg}
            handleNavigation={handleNavigation}
          />
      }

      {category === 'people' &&
          <DataCharacters 
            dataInfo={dataInfo} 
            relatedData={relatedData}
            useBrokenImg={useBrokenImg}
            handleNavigation={handleNavigation}
          />
      }

      {category === 'vehicles' &&
          <DataVehicles 
            dataInfo={dataInfo} 
            relatedData={relatedData}
            useBrokenImg={useBrokenImg}
            handleNavigation={handleNavigation}
          />
      }


      {category === 'species' &&
        <DataSpecies 
          dataInfo={dataInfo} 
          relatedData={relatedData}
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
      }

      {category === 'planets' &&
        <DataPlanets 
          dataInfo={dataInfo} 
          relatedData={relatedData}
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
      }

      {category === 'starships' &&
        <DataStarships 
          dataInfo={dataInfo} 
          relatedData={relatedData}
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
      }

    </div>
  )
}
