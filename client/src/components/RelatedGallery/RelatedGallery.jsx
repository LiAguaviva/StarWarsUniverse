import './RelatedGallery.css'
import { getIdFromUrl } from '../../utils/utils';

export const RelatedGallery = ({ title, data, category, useBrokenImg, handleNavigation }) => {
  
  
  if (!data?.length) return null;
  
  return (
    <div className='dataCard'>
          <h3>{title}</h3>
          <div className='relatedGallery'>
            {data.map((elem, i) => (
              <div 
                className='miniCard'
                key={i}
                >
                <p>{elem.name}</p>
                  <img
                    src={`images/${category}/${getIdFromUrl(elem.url)}.jpg`}
                    alt=""
                    onError={useBrokenImg}
                    onClick={() => handleNavigation(`${category}`, elem)}
                    />
              </div>
            ))}
          </div>
        </div> 
  )
}
