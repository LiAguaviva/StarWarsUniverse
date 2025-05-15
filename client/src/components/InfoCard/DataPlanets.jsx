import { RelatedGallery } from '../RelatedGallery/RelatedGallery';

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

        <RelatedGallery 
          title='residents'
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
