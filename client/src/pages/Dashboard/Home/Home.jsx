import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {

  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      // pixar: .get('http://93.93.117.48/api/films')
      .then((res)=> {
        setData(res.data)
        // pixar: setData(res.data.films)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  


  console.log(data);
  
  return (
    <div>
      {data ?
        <>
        <div>
          <button>Movies</button>
          <button>Characters</button>
        </div>
        <div>
          info
        </div>
        <div>
          gallery
        </div>
        </>
        
      :
        <FontAwesomeIcon icon={faCircleNotch} spin className='spin' />
      }
    </div>
  )
}
