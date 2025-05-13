import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { getIdFromUrl } from '../../utils/utils';
import axios from 'axios';
import { DataFilms } from './DataFilms';
import './InfoCard.css'
import { DataCharacters } from './DataCharacters';
import { DataVehicles } from './DataVehicles';
import { DataSpecies } from './DataSpecies';
import { DataPlanets } from './DataPlanets';
import { DataStarships } from './DataStarships';

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

    if (dataKey && Array.isArray(dataInfo[dataKey]) && dataInfo[dataKey].length > 0) {
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
