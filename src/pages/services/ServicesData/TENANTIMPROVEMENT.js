import * as React from 'react';
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./Logo.png";



const pages = ['Home', 'Services', 'Gallery', 'About UDS', 'Contact Us'];


const useStyles = makeStyles({
  logo: {
    maxWidth: 200,
  },
});

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    const classes = useStyles();

    return (
      <AppBar position="static" sx={{ bgcolor: "#003478" }}> 
        <Toolbar >
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          {/** Ultimate Drafting Services */}
          </Typography>
        

          {/** This is the main display */}
          <img src={logo} alt="Logo" className={classes.logo} />
          <Typography 
            variant="h6" 
            component="div" 
            noWrap
            sx={{ flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
          {/** Ultimate Drafting Services */}
          </Typography>
          {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ display: { xs: 'none', md: 'flex' } }} >{page}</Typography>
                </MenuItem>
              ))}
          
          
        </Toolbar>
      </AppBar>
    );
};
export default ResponsiveAppBar;
