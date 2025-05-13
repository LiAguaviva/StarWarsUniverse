import { getIdFromUrl } from '../../utils/utils'

export const DataPlanets = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {

  console.log('datainfo', dataInfo);
  console.log('relatedData', relatedData);

  return (
    <>
      <p>Diameter: {dataInfo.diameter}</p>
      <p>Terrain: {dataInfo.terrain}</p>
      <p>Gravity: {dataInfo.gravity}</p>
      <p>Orbital period: {dataInfo.orbital_period}</p>
      <p>Rotation period: {dataInfo.rotation_period}</p>
      <p>Climate: {dataInfo.climate}</p>
      <p>Population: {dataInfo.population}</p>
      <p>Surface water: {dataInfo.surface_water}</p>

      {relatedData.characters.length > 0 && (
        <div className='dataCard'>
          <h3>Residents</h3>
          <div className='relatedGallery'>
            {relatedData.characters.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
              >
                <p>{elem.name}</p>
                <img 
                  src={`images/people/${getIdFromUrl(elem.url)}.jpg`}
                  alt=''
                  onError={useBrokenImg}
                  onClick={() => handleNavigation('people', elem)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {relatedData.films.length > 0 && (
        <div className='dataCard'>
          <h3>Appears on</h3>
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

  </>
  )
}
