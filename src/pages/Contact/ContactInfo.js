import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import logo from "./info.jpg";
import Box from "@mui/material/Box";

export const TextTextText = (
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
        OUR ADU
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
        align="flex-start"
        textTransform="uppercase"
        color="#003478"
      >
        TEXTTEXTTEXT
      </Typography>
    
      <Typography variant="h5" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography variant="h4" color="text.primary">
        LOCATION 
      </Typography>
      <Typography variant="h5" color="text.secondary">
        12950 Paramount Blvd 
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Suite 201
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Downey, CA 90242 
      </Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography variant="h4" color="text.primary">
        TELEPHONE 
      </Typography> 
      <Typography variant="h5" color="text.secondary">
        (714) 853-3957
      </Typography> 
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1
        }}
      />
      <Typography variant="h4" color="text.primary">
        EMAIL 
      </Typography> 
      <Typography variant="h5" color="text.secondary">
        team@ultimatedraftingpro.com
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
