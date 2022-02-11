import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import LETSBEGININFO from "./LetsBeginInfo"






export default function AddressForm() {
  
  return (
    <React.Fragment>
      <Box m="auto"  p={4}  flexWrap= "wrap"  >
      <LETSBEGININFO/>
      </Box>
      <Box m="auto" width={1400} height={600} >
      <Grid container spacing={9}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
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
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
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
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
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
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            inputProps={{style: {fontSize: 20}}} // font size of input text
             InputLabelProps={{style: {fontSize: 20}}} // font size of input label
          />
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
);
}