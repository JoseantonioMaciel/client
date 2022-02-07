import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image1 from "./image1.jpg";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.png";

import Description from "./ProcessInfo"



const useStyles = makeStyles({
    root: {
        maxWidth: 293,    
    },

    box: {
        height: 1222,
        Width:  566.31, 
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
      img: Image1,
      title: "CONSULTATION",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  },
  {
      img: Image2,
      title: "PRELIMINARY DESIGN",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  },
  {
      img: Image3,
      title: "PLAN DEVELOPMENT",
      description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  },
  {
    img: Image4,
    title: "SUBMITTAL",
    description:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
  }
  ];


export default function ProcessCard( ) {
  const classes = useStyles();
  const styles = useStyles();
  
  return (
  
    <Box  sx={{
      boxShadow: 20,
      backgroundColor: '#B8C3CE',
      height:950,
      
    }}>
      <Description/>
      <Grid className={styles.content}
        container
        gap={6}
        justifyContent="center"
        alignItems="center">
      {mediacards.map((item) =>(
        <Card className={classes.root}>
          <CardMedia  style={{height: 221.97,width:293, }} image = {item.img}/>
          <CardContent style={{height: 150,}}>
          <Typography gutterBottom variant="h5" color="#003478" component="div">
            {item.title} 
          </Typography>
          <Typography variant="body1"   >
            {item.description}
          </Typography>
          </CardContent >  
        </Card>
        ))}
      </Grid>
    
    </Box>
);
}