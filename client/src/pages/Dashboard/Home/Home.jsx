import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { InfoCard } from '../../../components/InfoCard/InfoCard';
import { Gallery } from '../../../components/Gallery/Gallery';

export const Home = () => {

  const [data, setData] = useState();
  const [dataInfo, setDataInfo] = useState({});
  const [category, setCategory] = useState('films')
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/${category}/`)
      // pixar: .get('http://93.93.117.48/api/films')
      .then((res)=> {
        setData(res.data)
        setDataInfo(res.data.results[0]);
        // pixar: setData(res.data.films)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category])

  const handleCategory = (cat) => {
    setCategory(cat)
    setShowInfo(true);
  }
  
  const selectItem = (item) => setDataInfo(item);


  console.log('data', data);
  
  return (
    <div className='homePage'>
      {data ?
        <>
        <div className='categoryButtons'>
          <button onClick={()=>handleCategory('films')}>Movies</button>
          <button onClick={()=>handleCategory('people')}>Characters</button>
          <button onClick={()=>handleCategory('vehicles')}>Vehicles</button>
          <button onClick={()=>handleCategory('species')}>Species</button>
          <button onClick={()=>handleCategory('planets')}>Planets</button>
          <button onClick={()=>handleCategory('starships')}>Starships</button>
        </div>

        {showInfo &&
          <>
          <div>
            <InfoCard 
              dataInfo={dataInfo} 
              category={category}
              />
          </div>
          <div>
            <Gallery 
              data={data}
              selectItem={selectItem}
              />
          </div>
        </>
        }
        </>
        
      :
        <FontAwesomeIcon icon={faCircleNotch} spin className='spin' />
      }
    </div>
  )
}
