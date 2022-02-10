import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import gal1 from "./images/gal1.jpg";
import gal2 from "./images/gal2.jpg";
import gal3 from "./images/gal3.jpg";
import gal4 from "./images/gal4.jpg";


export const ONE = (
  <React.Fragment>
    
    <CardContent>
    <CardMedia component="img" height="400" image={gal1} alt="Media" />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        LIMERICK AVE
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        WINNETKA, CA
      </Typography>
    </CardContent>
  </React.Fragment>
);

export const TWO = (
  <React.Fragment>
    <CardContent>
    <CardMedia component="img" height="400" image={gal2} alt="Media" />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        CRANER AVE
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        WINNETKA, CA
      </Typography>
    </CardContent>
  </React.Fragment>
);

export const THREE = (
  <React.Fragment>
    <CardContent>
    <CardMedia component="img" height="400" image={gal3} alt="Media" />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        BELHAVEN ST
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        LOS ANGELES, CA
      </Typography>
    </CardContent>
  </React.Fragment>
);

export const FOUR = (
  <React.Fragment>
    <CardContent>
    <CardMedia component="img" height="400" image={gal4} alt="Media" />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        LIMERICK AVE
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        LOS ANGELES, CA
      </Typography>
    </CardContent>
  </React.Fragment>
);
