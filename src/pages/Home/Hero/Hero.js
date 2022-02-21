import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "./Hero.jpg";
import Grow from "@mui/material/Grow";
import {styled} from '@mui/material/styles';
import { red, green, blue, pink, yellow } from '@mui/material/colors';


const useStyles = makeStyles((theme) => ({
section: {
    height: "98vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
},
content: {
    height: "100%"
},
container: {
    height: "100%",
    zIndex: 100,
    position: "relative"
},
}));

const H1 = styled('Typography')(({ theme }) => ({
  color: 'white',
  textAlign: 'center' ,
  Typography: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: yellow[500],
    fontSize: 34,
    
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: pink[500],
    fontSize: 48,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: red[500],
    fontSize: 48,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: blue[500],
    fontSize: 60,
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: green[500],
    fontSize: 100,
  },
}));

const H2 = styled('Typography')(({ theme }) => ({
  color: 'white',
  textAlign: 'center' ,
  Typography: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: yellow[500],
    fontSize: 16,
    
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: pink[500],
    fontSize: 20,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: red[500],
    fontSize: 20,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: blue[500],
    fontSize: 24,
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: green[500],
    fontSize: 34,
  },
}));

export default function BoxSx() {
const styles = useStyles();

const [shouldShow, setShouldShow] = React.useState(false);
useEffect(() => setShouldShow(true),[]);
return (
    <Paper className={styles.section}>
      <Container className={styles.container} maxWidth="mg">
          <Grid
          className={styles.content}
          container
          justifyContent="space-around"
          alignItems="center"
          textAlign= "center" 
          >
            <Grow
                in={shouldShow}
                style={{ transformOrigin: "0 0 0" }}
                {...(shouldShow ? { timeout: 2000 } : {})}
            >
                <Grid item sm={12}>
                    <H1 gutterBottom>
                        Ultimate Drafting Services
                    </H1>
                    <br/>
                    <H2 gutterBottom>
                        Ultimate Drafting Services
                    </H2>
                </Grid>
            </Grow>
          </Grid>
      </Container>
    </Paper>
);
}
