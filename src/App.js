
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from "./pages/Home/Main"
import { Button, Box, AppBar, Toolbar, Typography,} from '@mui/material';
import Contactpage from "./pages/Contact/Contactus"
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
      
    </div>
  );
}

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          logo
      </Typography>
      <Button color="inherit" href="/">Home</Button>
      <Button color="inherit" href="/Services">Services</Button>
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
      <Contactpage/>
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
    <div>
<ASBUILT/>
    </div>
    
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
