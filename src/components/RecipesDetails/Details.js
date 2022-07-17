import React, { useContext,useEffect,useState } from "react"
import { useParams, Link } from "react-router-dom"
import { RecipesContext } from "../../Contexts/RecipesContext";
import {LoadingContext} from "../../Contexts/LoadingContext";
import axios from "axios";

import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid,Button,Card } from '@mui/material';



const {REACT_APP_API_KEY} = process.env;


function Details () {
    const [recipes,setRecipes] = useContext(RecipesContext);
    const [loading,setLoading] = useContext(LoadingContext);
    const [expanded, setExpanded] = useState(false);
    const {id} = useParams(); 
    
   const getRecipeDetails = async () => {
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}&includeNutrition=false`
        const response = await axios
        .get(url)
        .then(response=> {
          //console.log(response.data.results)
          setRecipes(response.data)
        });
        setLoading(true)
      } catch (e) {
        console.log(e);
      }
    }  
    
    useEffect(() => {
        getRecipeDetails();
    },[id])

    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
if (loading) {
  (<Typography variant="h6" component="p">
        LOADING...
      </Typography>) 
}
    return (
      <div style={{paddingTop:70,paddingBottom:5}}>
        <Grid item xs={1} sm={4} md={4} sx={{display:"flex", justifyContent:"center"}}>
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader
          /> 
          <Typography component='span' variant="h5" >
          <div style={{textAlign:"center"}}>{recipes.title}</div>
          </Typography>
          
          <CardMedia
            component="img"
            height="194"
            image={recipes.image}
            alt="food-recipes"
          />
          <CardContent>
            <Typography component='span' variant="body2" color="text.secondary">
            <Typography paragraph>Description:</Typography>
              {recipes.summary}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          <Link  to={"/"}>
          <Button 
          color="primary"
          variant="contained">HOME
          </Button>
          </Link>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              <Typography paragraph>
              {recipes.extendedIngredients !== undefined ? recipes.extendedIngredients.map((details) =>{
            const {original} = details
            return (<ol>
               <li style={{listStyleType:"none"}}>{original}</li>
              </ol>)
          }) : " Ingredients are not available "} 
              </Typography>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
              {recipes.instructions}
              </Typography>
              <CardActions disableSpacing>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{justifyContent:"flex-end"}}
            >
              <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>
        </div> 
      
    )
    

}
 
export default Details




