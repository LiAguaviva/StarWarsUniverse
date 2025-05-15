import { RelatedGallery } from '../RelatedGallery/RelatedGallery'



export const DataStarships = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {
  
  console.log('datainfo', dataInfo);
  console.log('relatedData', relatedData);
  

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

      
        <RelatedGallery 
          title='pilots'
          data={relatedData.pilots}
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
