import { RelatedGallery } from '../RelatedGallery/RelatedGallery'

export const DataCharacters = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {

  console.log('dataInfo', dataInfo);
  console.log('relatedData', relatedData);
  

  return (
    <>
      <p>Gender: {dataInfo.gender}</p>
      <p>Birthday: {dataInfo.birth_year}</p>
      <p>Height: {dataInfo.height}</p>
      <p>Mass: {dataInfo.mass}</p>
      <p>Eye color: {dataInfo.eye_color}</p>
      <p>Hair color: {dataInfo.hair_color}</p>
      
        <RelatedGallery 
          title='Appears on'
          data={relatedData.films}
          category='films'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Homeworld'
          data={relatedData.homeworld}
          category='planets'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='starships'
          data={relatedData.starships}
          category='starships'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
       
        <RelatedGallery 
          title='vehicles'
          data={relatedData.vehicles}
          category='vehicles'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='species'
          data={relatedData.species}
          category='species'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

    </>
  )
}
