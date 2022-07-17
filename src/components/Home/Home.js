import { useEffect, useContext } from "react";
import {RecipesContext} from "../../Contexts/RecipesContext"
import {QueryContext} from "../../Contexts/QueryContext"
import {LoadingContext} from "../../Contexts/LoadingContext"
import "./Home.css"
import Recipe from "../Recipes/Recipe"
import { Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const {REACT_APP_API_KEY} = process.env;
const diet = "vegetarian,vegan,fruitarian"
const excludeIngredients = "meat,gelatin,eggs,dairy,honey"
const axios = require('axios');


function Home () {
    const [recipes, setRecipes] = useContext(RecipesContext);
    const [query, setQuery] = useContext(QueryContext);
    const [loading, setLoading] = useContext(LoadingContext);
   

    const getRecipes = async () => {
      try{
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&diet=${diet}&excludeIngredients=${excludeIngredients}&query=${query}&addRecipeInformation=true&fillIngredients=true`
        const response = await axios
        .get(url)
        .then(response=> {
          //console.log(response.data.results)
          setRecipes(response.data.results)
        });
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    }  
      

    useEffect (() => {
     getRecipes()
    },[query]);

    
    if (query === undefined) {
      <div style={{paddingTop:0, display:"flex", justifyContent:"center"}}>
        <Typography variant="h6" component="p">
        Recipes not Found
      </Typography>
        </div>
    }

      return (
      
        <div className="app-container">
      <div className="search-bar">
      <form className="form-input">
        <input 
        className="input-bar"
        type="search"
        placeholder="Search Recipe" 
        onChange={(e)=>setQuery(e.target.value)} 
        />
        <Button 
        className="btn-search" 
        type="submit" 
        color="primary"
        variant="contained"
        startIcon={<SearchIcon />}> SEARCH </Button>
      </form>
      {loading ?  (<div style={{justifyContent: "center", display: "flex", paddingTop:50}}><Typography variant="h6" component="p">
        LOADING...
      </Typography></div>) : (<Recipe recipes={recipes} key={recipes.id}/>) }
         
      </div>
      </div>
      )
    
}

export default Home





