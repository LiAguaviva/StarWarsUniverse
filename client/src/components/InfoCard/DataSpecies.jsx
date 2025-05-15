import { RelatedGallery } from '../RelatedGallery/RelatedGallery'


export const DataSpecies = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {

  console.log('dataInfo', dataInfo);
  console.log('relatedData', relatedData);
  

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

        <RelatedGallery 
          title='homeworld'
          data={relatedData.homeworld}
          category='planets'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='characters'
          data={relatedData.characters}
          category='people'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />

        <RelatedGallery 
          title='Appears on'
          data={relatedData.films}
          category='films'
          useBrokenImg={useBrokenImg}
          handleNavigation={handleNavigation}
        />
      
    </>
  )
}
