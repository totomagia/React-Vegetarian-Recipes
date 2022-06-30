import React from "react"
import { Link } from "react-router-dom"


function Recipe ({recipes})  {
    return(
        <div className="recipes-search">
      {recipes.map((recipe) => {
        const {id,title,image} = recipe
        return (
        <div className="recipes-container" key={id}>
           <h4 className="recipes-title">{title}</h4>
          <Link to={`/${recipe.id}`}><img src={image} alt="food" className="image-card"/></Link>
          </div>
        ) 
      })}
    </div>
    )
    

}

export default Recipe