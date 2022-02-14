import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "./images/main.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { ONE, TWO, THREE, FOUR } from "./GalleryInfo";


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

export default function BasicGrid() {
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
              Gallery
            </Typography>
          </Grid>
        </Grid>
      </Container>
      
    <Box sx={{ flexGrow: 1 }}>
    <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Grid container gap={6} justifyContent="center">
        <Grid item xs={4}>
          <Card>{ONE}</Card>
          <br />
          <br />
          <Card>{TWO}</Card>
        </Grid>
        <Grid item xs={4}>
          <Card>{THREE}</Card>
          <br />
          <br />
          <Card>{FOUR}</Card>
        </Grid>
      </Grid>
    </Box>
    </Paper>
  );
}
