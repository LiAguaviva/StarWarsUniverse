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

        <RelatedGallery 
          title='Related characters'
          data={relatedData.characters}
          category='people'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Related Planets'
          data={relatedData.planets}
          category='planets'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Related Starships'
          data={relatedData.starships}
          category='starships'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Related Vehicles'
          data={relatedData.vehicles}
          category='vehicles'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Related Species'
          data={relatedData.species}
          category='species'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
    </>
  )
}
