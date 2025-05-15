import './Menubutton.css'

export const MenuButton = ({handleCategory, category, activeCategory}) => {
  return (
    <button 
      onClick={()=>handleCategory(category)}
      className={
              activeCategory === category
              ? 'active'
              : 'inactive'
      }
    >
      <p>{category === 'people' 
          ? 'characters'
          : category
          }
      </p>
    </button>
  )
}
