import React,{ useContext } from "react";
import { RecipesContext } from "../../Contexts/RecipesContext";
import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { Box, Button, Grid } from '@mui/material';


function Recipe ()  {
  const [recipes, setRecipes] = useContext(RecipesContext);
  
  return (

    <Box sx={{paddingTop:10, paddingBottom:5}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
    {Object.values(recipes).map((recipe,index) => {
      return(
        <Grid item xs={1} sm={4} md={4} key={index} sx={{display:"flex", justifyContent:"space-evenly"}}>
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe?.image}
        alt="food-img"
      />
      <CardContent>
        <Typography variant="h8" component="div">
         <Box sx={{justifyContent:"center",display:"flex",alignItems:"center"}}> 
         {recipe?.title} 
         </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        <Box sx={{display:"flex", justifyContent:"space-around", paddingTop:1}}>
        <AccessTimeFilledRoundedIcon /> Ready in {recipe?.readyInMinutes} min
        <GroupsRoundedIcon/> Serving for {recipe?.servings} {recipe?.servings <=1 ? "People" : "Peoples"}
        </Box>
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/${recipe?.id}`}>
          <Button size="small" variant="contained" color="primary">Learn More</Button>
          </Link>
      </CardActions>
    </Card>
    
    </Grid>
      )
    })}
    </Grid>
    </Box>

     )
}

export default Recipe

    