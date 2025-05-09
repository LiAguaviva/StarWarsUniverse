import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import swLogo from '../../../assets/star-wars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { InfoCard } from '../../../components/InfoCard/InfoCard';
import { Gallery } from '../../../components/Gallery/Gallery';
import { getData } from '../../../helpers/axiosHelper';

export const Home = () => {

  const [data, setData] = useState();
  const [dataInfo, setDataInfo] = useState({});
  const [category, setCategory] = useState('films')
  const [showInfo, setShowInfo] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [selectedItem, setSelectedItem] = useState('')

  /* useEffect(() => {
    getData(category)
      .then((res)=> {
        setData(res.data)
        setDataInfo(res.data.results[0]);
        // pixar: setData(res.data.films)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []) */

  useEffect(() => {
    getData(category)
      .then((res) => {
        setData(res.data);
        if (selectedItem) {
          axios.get(selectedItem.url)
            .then(res => {
              setDataInfo(res.data);
            });
            setSelectedItem(null); 
        } else {
          setDataInfo(res.data.results[0]); // usamos el primero
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }, [category]);
    
    const handleCategory = (cat) => {
      setCategory(cat);
      setShowInfo(true);
      setShowWelcome(false);
    }
    
    const handlePage = (url)=> {
      axios
      .get(url)
      .then((res) => {
        setData(res.data)
        selectItem(res.data.results[0])
      })
      .catch((error) => {
        console.log(error);
      })
    }
    
    const handleNavigation = (newCategory, elem) => {
      setSelectedItem(elem);
      handleCategory(newCategory);
  };  

  const showHomePage = () => {
    setShowWelcome(true)
    setShowInfo(false)
  }

  
  const selectItem = (item) => setDataInfo(item);
  
  // console.log('data', data);
  console.log('datainfo', dataInfo);

  
  
  return (
    <div className='homePage'>
      <img 
        src={swLogo} 
        className='swLogoHome' 
        alt="star wars logo"
        onClick={showHomePage} 
      />
      {data ?
        <>
        <div className='categoryButtons'>
          <button onClick={()=>handleCategory('films')}><p className='text-shadow-pop-top'>Movies</p></button>
          <button onClick={()=>handleCategory('people')}><p className='text-shadow-pop-top'>Characters</p></button>
          <button onClick={()=>handleCategory('vehicles')}><p className='text-shadow-pop-top'>Vehicles</p></button>
          <button onClick={()=>handleCategory('species')}><p className='text-shadow-pop-top'>Species</p></button>
          <button onClick={()=>handleCategory('planets')}><p className='text-shadow-pop-top'>Planets</p></button>
          <button onClick={()=>handleCategory('starships')}><p className='text-shadow-pop-top'>Starships</p></button>
        </div>

        {showWelcome &&
          <div className="welcome">
          <p className="welcomeP1">Welcome to the Star Wars Universe!</p>
          <p>
            This project is powered by the <a href="https://swapi.py4e.com/" target="_blank" rel="noopener noreferrer">Star Wars API (SWAPI)</a>, a rich open-source database full of details about your favorite galaxy far, far away.
          </p>
          <p>
            Here you’ll find a curated collection of characters, planets, ships, and movies — all gathered in one interactive place for fans and explorers alike.
          </p>
          <p>
            Dive into the lore, relive the saga, and browse the visual gallery to see the epic moments that shaped a generation.
          </p>
          <p>
            Enjoy your journey across the stars... and may the Force be with you.
          </p>
        </div>
        }

        {showInfo &&
          <>
           <div>
            <Gallery 
              data={data}
              selectItem={selectItem}
              category={category}
              handlePage={handlePage}
              />
          </div>

          <div>
            <InfoCard 
              dataInfo={dataInfo} 
              category={category}
              handleCategory={handleCategory}
              selectItem={selectItem}
              handleNavigation={handleNavigation}
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
