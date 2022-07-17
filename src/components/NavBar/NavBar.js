import React from "react"
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoNav from "./logo-50.png"


export default function Navbar () {
    return(
        <Box>
        <AppBar position="fixed">
        <Toolbar sx={{
            display: 'flex',
            justifyContent:'space-between'
            }}>

        <img  height='30px' src={LogoNav} alt="leaf" /> 
        
        <Typography variant="h6" color="white" component="span" sx={{ flexGrow: 1 }}>
            Vegetarian Recipes
        </Typography>
        <div className="social-icons" style={{
            display: 'flex',
            justifyContent: 'space-around',
            width:'100px'
            }}>

        <IconButton aria-label="instagram" edge="end" color="inherit" target="_blank" rel="noopener" href="https://www.instagram.com/totomagia/">
            <InstagramIcon />
        </IconButton>
         
        <IconButton aria-label="github" edge="end" color="inherit" target="_blank" rel="noopener" href="https://github.com/totomagia">
            <GitHubIcon />
        </IconButton>
        </div>
        
        
        </Toolbar>
        </AppBar>
        </Box>
    )
}
