import React, { useContext,useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { RecipesContext } from "../Contexts/RecipesContext";
import axios from "axios";
import Icon100 from "../image/ingredients100.png"
import Instructions100 from "../image/instructions100.png"
import Vegetarian100 from "../image/vegetarian100.png"


const {REACT_APP_API_KEY} = process.env;



function Details () {
    const [recipes,setRecipes] = useContext(RecipesContext)
    const {id} = useParams(); 
    
   const getRecipeDetails = async () => {
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}&includeNutrition=false`
        const response = await axios.get(url);
        console.log(response.data)
        setRecipes(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    
    useEffect(() => {
        getRecipeDetails();
    },[id])

    return(
        <div className="details-container">
        <div className="title-description">
        <h1> {recipes.title} </h1>
        <img src={recipes.image} alt="food" className="image-card-details" />
        </div>
        <div className="ingredients-description">
        <img src={Icon100} alt="icon" />
        {recipes.extendedIngredients !== undefined ? recipes.extendedIngredients.map((details) =>{
          const {original} = details
          return (<ol>
             <li className="ingredients-details">{original}</li>
            </ol>)
        }) : " Ingredients are not available "} 
        </div>
        
        <div className="instruction-description">
        <img src={Instructions100} alt="icon" />
        <p className="intruction-text">{recipes.instructions}</p>
        </div>
        <div className="howto-descriptions">
        <img src={Vegetarian100} alt="icon"/>
        
        <p className="howto-text">{recipes.summary}</p>
        </div>
        <div className="btn-container" >
        <Link  to="/">
        <button className="btn-home">HOME</button>
        </Link>
        </div>
        </div>    
        
    )

}
 
export default Details




