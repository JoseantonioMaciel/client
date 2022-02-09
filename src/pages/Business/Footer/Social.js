import React from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import { grey } from '@mui/material/colors';



const socialItems = [
  { icon: InstagramIcon, url: "",color:"white" },
  { icon: PinterestIcon, url: "" },
  { icon: LinkedInIcon, url: "" }
];

export default function Social({ direction }) {
return (
    <Grid container direction={direction || "row"} spacing={2}>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={item.url}>
            <IconButton >
              <item.icon fontSize="large"  sx={{ color: grey[50] }}  />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
