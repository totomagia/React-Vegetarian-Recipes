import { useEffect, useContext } from "react";
import {RecipesContext} from "../Contexts/RecipesContext"
import {QueryContext} from "../Contexts/QueryContext"
import Recipe from "./Recipe"
import ErrorHendling from "./ErrorHendling";



const {REACT_APP_API_KEY} = process.env;
const diet = "vegetarian,vegan,fruitarian"
const excludeIngredients = "meat,gelatin,eggs,dairy,honey"
const axios = require('axios');


function Home () {
    const [recipes, setRecipes] = useContext(RecipesContext);
    const [query, setQuery] = useContext(QueryContext);

    const getRecipes = async () => {
      try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&diet=${diet}&excludeIngredients=${excludeIngredients}&query=${query}&addRecipeInformation=true&fillIngredients=true`
        const response = await axios.get(url);
        console.log(response.data)
        setRecipes(response.data.results)
      } catch (error) {
        <ErrorHendling />
        console.error(error)
      }
    }


    useEffect (() => {
     getRecipes()
    },[query])



    return(
      <div className="app-container">
      <div className="search-bar">
      <form className="form-input">
        <input 
        className="input-bar"
        type="search"
        placeholder="Search Recipe" 
        onChange={(e)=>setQuery(e.target.value)} 
        />
        <button className="btn-search" type="submit"> SEARCH </button>
        </form>
        <div className="recipes-search">
        <Recipe recipes={recipes} />
        </div>
        <div className="error-search">
         {query === excludeIngredients ? <ErrorHendling /> : null }  
        </div>
      </div>
      </div>
    )
}



export default Home