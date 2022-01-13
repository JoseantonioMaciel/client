import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "./Hero.jpg";

import Grow from "@mui/material/Grow";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Needed only if you need to added the social media information
//import SendIcon from "@mui/icons-material/Send";
//import Social from "./Social";
//import Button from "@mui/material/Button";
//import Box from "@mui/material/Box";
//import Hidden from "@mui/material/Hidden";


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

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 100,
      fontWeight: 25,
      color: 'white',
    },
    h2: {
      fontSize: 80,
      fontWeight: 5,
      color: 'white',
    },
  },
});



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
        justifyContent="flex-start"
        alignItems="inherit"
        >
          <Grow
              in={shouldShow}
              style={{ transformOrigin: "0 0 0" }}
              {...(shouldShow ? { timeout: 2000 } : {})}
          >
              <Grid item sm={9}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h1" >
                      Ultimate Drafting Services
                  </Typography>
                  <Typography variant="h2">
                      Optimum Design Solution
                  </Typography>
                </ThemeProvider>
              </Grid>
          </Grow>
        </Grid>
    </Container>
    </Paper>
);
}
