import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "../IMAGES/Ser3.jpg";


import Card from "@mui/material/Card";
import { OURADU, SCHEDUELEACONSULTATION, LETSBEGIN ,IMG} from "../ServicesData/ADUINFO";
import Footer from "../../Footer/Footer";


const useStyles = makeStyles((theme) => ({
  section: {
    height: "80vh",
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
  }
}));

export default function BoxSx() {
  const styles = useStyles();
  return (
    <Paper className={styles.section}>
      <Container className={styles.container} maxWidth="mg">
        {/* Hero container and styled with background image*/}
        <Grid className={styles.content} container alignItems="end">
          {/* Creating Grid */}
          <Grid item sm={12}>
            {/* Holding the Typography */}
            <Typography
              variant="h1"
              component="div"
              color="#FFFFFF"
              gutterBotto
            >
              {/* The Typography */}
              ADU (Accessory Dwelling Units)
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container sclassName={styles.container} maxWidth="mg">
        <br /> {/* Remove This*/}
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Card elevation={0}>{OURADU}</Card>
          </Grid>
        </Grid>
        <br /> {/* Remove This*/}
        <Grid container spacing={20} alignItems="center">
          <Grid item xs={6}>
            <Card elevation={6}></Card>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={0} sx={{ maxWidth: 700 }}>
              {SCHEDUELEACONSULTATION}
            </Card>
          </Grid>
        </Grid>
        <br /> {/* Remove This*/}
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <Card elevation={0}>{LETSBEGIN}</Card>
          </Grid>
        </Grid>
      </Container>
        <Footer/>
    </Paper>
    
  );
}
