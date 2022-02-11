import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "./Hero.jpg";
import Grow from "@mui/material/Grow";
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

let theme = createTheme();
theme.typography.h1 = {
  color: 'white',
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '6.5rem',
  },
};




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
          >
            <Grow
                in={shouldShow}
                style={{ transformOrigin: "0 0 0" }}
                {...(shouldShow ? { timeout: 2000 } : {})}
            >
                <Grid item sm={9}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h1" align="center" gutterBottom>
                        Ultimate Drafting Services
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
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
