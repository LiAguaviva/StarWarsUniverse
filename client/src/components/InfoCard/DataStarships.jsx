import { getIdFromUrl } from '../../utils/utils'


export const DataStarships = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {


  return (
   <>
      <p>Model: {dataInfo.model}</p>
      <p>Manufacturer: {dataInfo.manufacturer}</p>
      <p>Starship class: {dataInfo.starship_class}</p>
      <p>Length: {dataInfo.length}</p>
      <p>Passengers: {dataInfo.passengers}</p>
      <p>Crew: {dataInfo.crew}</p>
      <p>Max atmosphering speed: {dataInfo.max_atmosphering_speed}</p>
      <p>Hyperdrive rating: {dataInfo.hyperdrive_rating}</p>
      <p>MGLT: {dataInfo.MGLT}</p>
      <p>Consumables: {dataInfo.consumables}</p>
      <p>Cost in credits: {dataInfo.cost_in_credits}</p>

      
      {relatedData.pilots.length > 0 && (
        <div className='dataCard'>
          <h3>Pilots</h3>
          <div className='relatedGallery'>
            {relatedData.pilots.map((elem, i) => (
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
