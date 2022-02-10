import * as React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Social from "./Social";
import Logo from "./Logo.png";



const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: '#003478'
    },
    logo: {
      maxWidth: 350,
    },
}));



const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.background.paper
}));

const Header = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.background.paper
}));

const Body = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.background.paper
}));

const UDS = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0),
  height: 300,
  width: 250,
}));

export default function BasicStack() {
  const classes = useStyles();
  return (
    
    <div className={classes.color}>
     <Container maxWidth = "1000">
        <Box sx={{ flexGrow: 1,backgroundColor: '#003478',p: 3}}>
          <Grid 
          container 
          gap={4}
          justifyContent="space-evenly"
          alignItems="flex-start">
            <Grid xs={12} md={2}>
              <Stack spacing={0}>
                <Title>Ultimate Drafting Services</Title>
                <Header>Location</Header>
                <Body>12950 Paramount Blvd </Body>
                <Body>Suite 201 </Body>
                <Body>Downey, CA 90242 </Body>
                <Header>Telephone</Header>
                <Body>(714) 853-3957</Body>
                <Header>E-mail</Header>
                <Body>team@ultimatedraftingpro.com</Body>
              </Stack>
            </Grid>

            <Grid xs={12} md={2}>
              <Stack spacing={0}>
                <Title>HOME</Title>
                <Title>SERVICES</Title>
                <Title>GALLERY</Title>
                <Title>ABOUT</Title>
                <Title>CONTACT US</Title>
              </Stack>
            </Grid>

            <Grid xs={12} md={2}>
              <Stack spacing={0}>
                <Title>Need fuel to kick start your creativity?</Title>
                <Social direction="row"  />
              </Stack>
            </Grid>
            
            <Grid xs={12} md={2}>
              <Box sx={{ width: 'auto' }}>
                <img src={Logo} alt="logo" className={classes.logo}  />
              </Box>
            </Grid>
          </Grid>
        </Box>
        </Container >
    </div>
  );
}
