import { RelatedGallery } from '../RelatedGallery/RelatedGallery'


export const DataVehicles = ({dataInfo, relatedData, useBrokenImg, handleNavigation}) => {

  return (
    <>
      <p>Model: {dataInfo.model}</p>
      <p>Manufacturer: {dataInfo.manufacturer}</p>
      <p>Vehicle class: {dataInfo.vehicle_class}</p>
      <p>Length: {dataInfo.length}</p>
      <p>Passengers: {dataInfo.passengers}</p>
      <p>Crew: {dataInfo.crew}</p>
      <p>Max atmosphering speed: {dataInfo.max_atmosphering_speed}</p>
      <p>Consumables: {dataInfo.consumables}</p>
      <p>Cost in credits: {dataInfo.cost_in_credits}</p>
      
        <RelatedGallery 
          title='Pilots'
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
