import { getIdFromUrl } from '../../utils/utils'


export const DataSpecies = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {


  return (
    <>
      <p>Classification: {dataInfo.classification}</p>
      <p>Designation: {dataInfo.designation}</p>
      <p>Language: {dataInfo.language}</p>
      <p>Average height: {dataInfo.average_height} cm</p>
      <p>Average lifespan: {dataInfo.average_lifespan}</p>
      <p>Skin colors: {dataInfo.skin_colors}</p>
      <p>Hair colors: {dataInfo.hair_colors}</p>
      <p>Eye colors: {dataInfo.eye_colors}</p>

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

      {relatedData.characters.length > 0 && (
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
          <h3>Films</h3>
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
