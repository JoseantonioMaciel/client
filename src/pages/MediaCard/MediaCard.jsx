import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "./001.jpg";
import Image1 from "./001.jpg";
import Image2 from "./001.jpg";
import Description from "./description"


const useStyles = makeStyles({
    root: {
        maxWidth: 450
    },
    media: {
        height: 140
    },
    container: {
      height: "100%",
      zIndex: 100,
      position: "relative"
  },
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
   
    <Box my={5}>
      <Description/>
      <Grid className={styles.content}
        container
        justifyContent="space-around"
        alignItems="center">
      {mediacards.map((item) =>(
        <Card className={classes.root}>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}} image = {Image1}/>
          <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.title} 
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {item.description}
          </Typography>
          </CardContent>
        </Card>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
    </Box>
  );
}