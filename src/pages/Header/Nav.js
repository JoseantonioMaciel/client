import * as React from 'react';
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./Logo.png";



const useStyles = makeStyles({
  logo: {
    maxWidth: 200,
  },
});

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" className={classes.logo} />
          </Typography>
          <Button color="inherit"> Home </Button>
          <Button 
          color="inherit"
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >Services</Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
        <MenuItem onClick={handleClose}>AUD</MenuItem>
        <MenuItem onClick={handleClose}>AS BUILT</MenuItem>
        <MenuItem onClick={handleClose}>KITCHEN REMODEL</MenuItem>
        <MenuItem onClick={handleClose}>MULTI STORY DUPLEX</MenuItem>
        <MenuItem onClick={handleClose}>NEW HOME</MenuItem>
        <MenuItem onClick={handleClose}>PERMIT SERVICES</MenuItem>
        <MenuItem onClick={handleClose}>REPAIR</MenuItem>
        <MenuItem onClick={handleClose}>ROOM ADDITION</MenuItem>
        <MenuItem onClick={handleClose}>TENANT IMPROVEMENT</MenuItem>
      </Menu>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">About UDS</Button>
          <Button color="inherit">Contact US</Button>
        </Toolbar>
      </AppBar>
    </Box>
);
}
