import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import logo from "../IMAGES/sec1.jpg";
import Box from "@mui/material/Box";

export const OURREPAIR = (
  <React.Fragment>
    <CardContent>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        textTransform="uppercase"
        color="#003478"
      >
        OUR REPAIR
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography variant="h5" color="text.secondary">
        This is just an example text. This is just an example text. This is just
        an example text. <br />
        This is just an example text. This is just an example text. This is just
        an example text. <br />
        This is just an example text. This is just an example text. This is just
        an example text. <br />
        This is just an example text. This is just an example text. This is just
        an example text.
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
    </CardContent>
  </React.Fragment>
);

export const SCHEDUELEACONSULTATION = (
  <React.Fragment>
    <CardContent>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        textTransform="uppercase"
        color="#003478"
      >
        Schedule A Consultation
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />

      <Typography variant="h5" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco l aboris nisi ut aliquip ex ea
        commodo consequat
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
    </CardContent>
    <CardActions>
      <Button size="large" variant="contained">
        Let's Do It
      </Button>
    </CardActions>
  </React.Fragment>
);

export const LETSBEGIN = (
  <React.Fragment>
    <CardContent>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        textTransform="uppercase"
        color="#003478"
      >
        LET'S BEGIN
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography variant="h5" color="text.secondary">
        Ultimate Drafting Services Values are driven by integrity and
        professionalism. We are dedicated to <br />
        providing you and your project with ultimate attention to ensure you
        receive the highest quality service <br />
        in the industry. Ultimate Drafting Services Values are driven by
        integrity and professionalism. We are dedicated to <br />
        providing you and your project with ultimate attention to ensure you
        receive the highest quality service.
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
    </CardContent>
  </React.Fragment>
);

export const IMG = (
  <React.Fragment>
    <CardMedia component="img" height="600" image={logo} alt="Media" />
  </React.Fragment>
);
