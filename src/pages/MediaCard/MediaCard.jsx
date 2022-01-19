import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "./image1.jpg";
import Image1 from "./image1.jpg";
import Image2 from "./image1.jpg";
import Description from "./description"



const useStyles = makeStyles({
    root: {
        maxWidth: 450,    
        transition: "transform 0.15s ease-in-out"
    },

    media: {
        height: 140
    },
    container: {
      height: "100%",
      zIndex: 100,
      position: "relative"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  palette:{
    primary:{
      main:"#323F4C"
    }
  }
});
const mediacards = [
  {
      img: Image,
      title: "ULTIMATE DESIGN",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  },
  {
      img: Image1,
      title: "PRECISION  DRAFTING",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  },
  {
      img: Image2,
      title: "EXCELLENT SERVICES",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  }
  ];


export default function MediaCard( ) {
  const classes = useStyles();
  const styles = useStyles();
  
  return (
  
    <Box  p={6} sx={{
      boxShadow: 20,
      backgroundColor: '#323F4C',
      
    }}>
      <Description/>
      <Grid className={styles.content}
        container
        justifyContent="space-around"
        alignItems="center">
      {mediacards.map((item) =>(
        <Card className={classes.root}  elevation={0} >
          <CardMedia  style={{height: 396,}} image = {Image1}/>
          <CardContent  style={{ backgroundColor: '#323F4C', }} >
          <Typography gutterBottom variant="h4" color="white" component="div">
            {item.title} 
          </Typography>
          <Typography variant="body1" color="white"  >
            {item.description}
          </Typography>
          </CardContent >  
        </Card>
        
        ))}
      </Grid>
    
    </Box>
  );
}