import { getIdFromUrl } from '../../utils/utils'
import { RelatedGallery } from '../RelatedGallery/RelatedGallery'


export const DataFilms = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {


  return (
    <>
      <p>EPISODE {dataInfo.episode_id}</p>
      <p>Release on: {dataInfo.release_date}</p>
      <p>Producer: {dataInfo.producer}</p>
      <div className='openingCrawl'>
        <p>{dataInfo.opening_crawl}</p>
      </div>
      
      {/* <p>Characters: {relatedData.characters.map(c => c.name).join(', ')}</p>
      <p>Planets: {relatedData.planets.map(c => c.name).join(', ')}</p>
      <p>Species: {relatedData.species.map(c => c.name).join(', ')}</p>
      <p>Starships: {relatedData.starships.map(c => c.name).join(', ')}</p>
      <p>Vehicles: {relatedData.vehicles.map(c => c.name).join(', ')}</p> */}

      {/* {relatedData.characters.length > 0 && (
        <div className='dataCard'>
          <h3>Characters</h3>
          <div className='relatedGallery'>
            {relatedData.characters.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
                >
                <p>{elem.name}</p>
                  <img
                    src={`images/people/${getIdFromUrl(elem.url)}.jpg`}
                    alt=""
                    onError={useBrokenImg}
                    onClick={() => handleNavigation('people', elem)}
                    />
              </div>
            ))}
          </div>
        </div>
      )} */}

      {relatedData.characters.length > 0 && (
        <RelatedGallery 
          title='Related characters'
          data={relatedData.characters}
          category='people'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
      )}

      {relatedData.planets.length > 0 && (
        <div className='dataCard'>
          <h3>Planets</h3>
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
                  onClick={() => handleNavigation('planets', elem)}
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedData.starships?.length > 0 && (
        <div className='dataCard'>
          <h3>Starships</h3>
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
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('starships', elem)}
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedData.starships?.length > 0 && (
        <div className='dataCard'>
          <h3>Vehicles</h3>
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
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('vehicles', elem)}
                  />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {relatedData.species.length > 0 && (
        <div className='dataCard'>
          <h3>Species</h3>
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
                  onClick={() => handleNavigation('species', elem)}
                  />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
