import axios from 'axios';
import { getIdFromUrl } from '../../utils/utils'
import { useEffect } from 'react';


export const DataFilms = ({dataInfo, relatedData, useBrokenImg, selectItem, handleCategory, category, handleNavigation}) => {

 /*  const handleNavigation = (category, elem) => {
    handleCategory(category);
    handleAxios(elem);
  }

  const handleAxios = async (elem) => {
    try {
      const response = await axios.get(elem.url);
      selectItem(response.data);
    } catch (error) {
      console.error('Error fetching selected item:', error);
    }
  };

useEffect(() => {
  handleAxios();
}, [category]) */




  
  return (
    <>
      <p>EPISODE {dataInfo.episode_id}</p>
      <p>Release on: {dataInfo.release_date}</p>
      <p>{dataInfo.opening_crawl}</p>
      <p>Producer: {dataInfo.producer}</p>
      
      {/* <p>Characters: {relatedData.characters.map(c => c.name).join(', ')}</p>
      <p>Planets: {relatedData.planets.map(c => c.name).join(', ')}</p>
      <p>Species: {relatedData.species.map(c => c.name).join(', ')}</p>
      <p>Starships: {relatedData.starships.map(c => c.name).join(', ')}</p>
      <p>Vehicles: {relatedData.vehicles.map(c => c.name).join(', ')}</p> */}

      {relatedData.characters.length > 0 && (
        <div className='dataCard'>
          <h3>Characters:</h3>
          <div className='relatedGallery'>
            {relatedData.characters.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
                >
                <p>{elem.name}</p>
                  <img
                    onClick={() => handleNavigation('people', elem)}
                    src={`images/people/${getIdFromUrl(elem.url)}.jpg`}
                    alt=""
                    onError={useBrokenImg}
                    className="related-img"
                    />
              </div>
            ))}
          </div>
        </div>
      )}

{relatedData.planets.length > 0 && (
        <div className='dataCard'>
          <h3>Planets:</h3>
          <div className='relatedGallery'>
            {relatedData.planets.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/planets/${getIdFromUrl(elem.url)}.jpg`}
                  alt=""
                  onError={useBrokenImg}
                  className="related-img"
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedData.species.length > 0 && (
        <div className='dataCard'>
          <h3>Species:</h3>
          <div className='relatedGallery'>
            {relatedData.species.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/species/${getIdFromUrl(elem.url)}.jpg`}
                  alt=""
                  onError={useBrokenImg}
                  className="related-img"
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedData.starships?.length > 0 && (
        <div className='dataCard'>
          <h3>Starships:</h3>
          <div className='relatedGallery'>
            {relatedData.starships.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/starships/${getIdFromUrl(elem.url)}.jpg`}
                  alt=""
                  className="related-img"
                  onError={useBrokenImg}
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedData.starships?.length > 0 && (
        <div className='dataCard'>
          <h3>Vehicles:</h3>
          <div className='relatedGallery'>
            {relatedData.vehicles.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/vehicles/${getIdFromUrl(elem.url)}.jpg`}
                  alt=""
                  className="related-img"
                  onError={useBrokenImg}
                  />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
