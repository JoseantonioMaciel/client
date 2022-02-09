
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from "./pages/Footer/Footer"
import Main from "./pages/Home/Main"

import { Button, Box, AppBar, Toolbar, Typography, Menu, MenuItem } from '@mui/material';

import ADU from './pages/Business/ServicesPages/ADU';
import ASBUILT from './pages/Business/ServicesPages/ASBUILT';
import KITCHENREMODEL from './pages/Business/ServicesPages/KITCHENREMODEL';
import MULTISTORYDUPLEX from './pages/Business/ServicesPages/MULTISTORYDUPLEX';
import NEWHOME from './pages/Business/ServicesPages/NEWHOME';
import PERMITSERVICES from './pages/Business/ServicesPages/PERMITSERVICES';
import ADREPAIRU from './pages/Business/ServicesPages/REPAIR';
import ROOMADITION from './pages/Business/ServicesPages/ROOMADITION';
import TENANTIMPROVEMENT from './pages/Business/ServicesPages/TENANTIMPROVEMENT';



export default function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

function Layout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
      </Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" 
      id="demo-positioned-button"
      aria-controls={open ? 'demo-positioned-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        Services
      </Button>
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
      <Button color="inherit" href="/gallery">Gallery</Button>
      <Button color="inherit" href="/about">About UDS</Button> 
      <Button color="inherit" href="/contact">Contact US</Button>
      </Toolbar>
          
      </AppBar>
      <Outlet />
    </Box>
 
  );
}

function Home() {
  return (
    <div>
      <Main/>
    </div>
  );
}
function Services() {
  return (
    <div>
      <h2>Services</h2>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}


function ONE() {
  return (
  <ADU/>
  );
}

function TWO() {
  return (
    <ASBUILT/>
  );
}

function THREE() {
  return (
    <KITCHENREMODEL/>
  );
}

function FOUR() {
  return (
    <MULTISTORYDUPLEX />
  );
}
function FIVE() {
  return (
    <NEWHOME/>
  );
}
function SIX() {
  return (
    <PERMITSERVICES/>
  );
}
function SEVEN() {
  return (
    <ADREPAIRU/>
  );
}
function EIGHT() {
  return (
    <ROOMADITION/>
  );
}
function NICE() {
  return (
    <TENANTIMPROVEMENT/>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
