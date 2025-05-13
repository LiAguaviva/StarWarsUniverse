import { getIdFromUrl } from '../../utils/utils'

export const DataCharacters = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {

  return (
    <>
      <p>Gender: {dataInfo.gender}</p>
      <p>Birthday: {dataInfo.birth_year}</p>
      <p>Height: {dataInfo.height}</p>
      <p>Mass: {dataInfo.mass}</p>
      <p>Eye color: {dataInfo.eye_color}</p>
      <p>Hair color: {dataInfo.hair_color}</p>
      

      {relatedData.films.length > 0 && (
        <div className='dataCard'>
          <h3>Appears On</h3>
          <div className='relatedGallery'>
            {relatedData.films.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/films/${getIdFromUrl(elem.url)}.jpg`}
                  alt=''
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('films', elem)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

        {relatedData.homeworld.length > 0 && (
        <div className='dataCard'>
          <h3>Homeworld</h3>
          <div className='relatedGallery'>
            {relatedData.homeworld.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/planets/${getIdFromUrl(elem.url)}.jpg`}
                  alt=''
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('planets', elem)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

       {relatedData.starships.length > 0 && (
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
                  alt=''
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('starships', elem)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
       
       {relatedData.vehicles.length > 0 && (
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
                  alt=''
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
                  alt=''
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
