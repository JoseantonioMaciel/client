import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import LETSBEGININFO from "./LetsBeginInfo"
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: '#003478'
    },

}));




export default function AddressForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box m="auto"  p={4}  width={1700}  >
      <LETSBEGININFO/>
      </Box>
      <Box m="auto" width={1400} height={600} >
      <Grid container spacing={9}>
        <Grid item xs={12} sm={6}>
          <TextField
          inputProps={{ className: classes.input }}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="Phone"
            name="Phone"
            label="Contact Number"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="EmailAddress"
            name="EmailAddress"
            label="Email Address"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
);
}