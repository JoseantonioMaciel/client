
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from "./pages/Home/Main"
import { Button, Box, AppBar, Toolbar, Typography,} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Contactpage from "./pages/Contact/Contactus"
import Gallerypage from "./pages/Gallery/Gallery"
import Logo from "./assets/Images/Logo.png"
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ADUPAGE from './pages/Business/ServicesPages/ADU';
import ASBUILTPAGE from './pages/Business/ServicesPages/ASBUILT';
import KITCHENREMODELPAGE from './pages/Business/ServicesPages/KITCHENREMODEL';
import MULTISTORYDUPLEXPAGE from './pages/Business/ServicesPages/MULTISTORYDUPLEX';
import NEWHOMEPAGE from './pages/Business/ServicesPages/NEWHOME';
import PERMITSERVICESPAGE from './pages/Business/ServicesPages/PERMITSERVICES';
import ADREPAIRUPAGE from './pages/Business/ServicesPages/REPAIR';
import ROOMADITIONPAGE from './pages/Business/ServicesPages/ROOMADITION';
import TENANTIMPROVEMENTPAGE from './pages/Business/ServicesPages/TENANTIMPROVEMENT';


const useStyles = makeStyles({
  logo: {
    maxWidth: 200,
  },
});
const pages = ['Home', 'Services', 'Gallery', 'About UDS', 'Contact Us'];

export default function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/** SERVICES */}
          <Route path="ADU" element={<ADU />} />
          <Route path="ASBUILT" element={<ASBUILT />} />
          <Route path="KITCHENREMODEL" element={<KITCHENREMODEL />} />
          <Route path="MULTISTORYDUPLEX" element={<MULTISTORYDUPLEX />} />
          <Route path="NEWHOME" element={<NEWHOME />} />
          <Route path="PERMITSERVICES" element={<PERMITSERVICES />} />
          <Route path="ADREPAIRU" element={<ADREPAIRU />} />
          <Route path="ROOMADITION" element={<ROOMADITION />} />
          <Route path="TENANTIMPROVEMENT" element={<TENANTIMPROVEMENT />} />
          {/** END SERVICES */}
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
    
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyles();

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
      <AppBar  position="static" sx={{ bgcolor: "#003478" }}>
      <Toolbar>
        {/** This is the Mobile Version Box*/}
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
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <img src={Logo} alt="Logo" className={classes.logo} />
      </Typography>
       {/** This is the Full website Navigation Bar  */}
      <Box  sx={{ display: { xs: 'none', md: 'flex' } }} >
      <Button color="inherit" href="/">Home</Button>
      {/** SERVICE BUTTON  */}
      <Button
      color="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        SERVICES
      </Button>
       {/** SERVICE BUTTON END */}
      {/** SERVICE MENU  */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Link to="/ADU" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} to="/ADU">ADU</MenuItem>
      </Link>
      <Link to="/ASBUILT" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/TWO">AS BUILT</MenuItem>
      </Link>
      <Link to="/KITCHENREMODEL" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/THREE">KITCHEN REMODEL</MenuItem>
      </Link>
      <Link to="/MULTISTORYDUPLEX" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/FOUR">MULTI STORY DUPLEX</MenuItem>
      </Link>
      <Link to="/NEWHOME" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/FIVE">NEW HOME</MenuItem>
      </Link>
      <Link to="/PERMITSERVICES" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/SIX">PERMIT SERVICES</MenuItem>
      </Link>
      <Link to="/ADREPAIRU" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/SEVEN">ADU REPAIRS</MenuItem>
      </Link>
      <Link to="/ROOMADITION" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/EIGHT">ROOM ADDITION</MenuItem>
      </Link>
      <Link to="/TENANTIMPROVEMENT" style={{ textDecoration: 'none', display: 'block' }}>
      <MenuItem onClick={handleClose} href="/NINE">TENANT IMPROVEMENT</MenuItem> 
      </Link>
      </Menu> 
      {/** SERVICE MENU END */}
      <Button color="inherit" href="/gallery">Gallery</Button>
      <Button color="inherit" href="/about">About UDS</Button> 
      <Button color="inherit" href="/contact">Contact US</Button>
      </Box>
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

function Gallery() {
  return (
    <div>
      <Gallerypage/>
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
// START OF SERVICES 

function ADU() {
  return (
    <div>
      <ADUPAGE/>
    </div>
  );
}

function ASBUILT() {
  return (
    <div>
      <ASBUILTPAGE/>
    </div>
  );
}

function KITCHENREMODEL() {
  return (
    <div>
      <KITCHENREMODELPAGE/>
    </div>
  );
}

function MULTISTORYDUPLEX() {
  return (
    <div>
      <MULTISTORYDUPLEXPAGE/>
    </div>
  );
}

function NEWHOME() {
  return (
    <div>
      <NEWHOMEPAGE/>
    </div>
  );
}
function PERMITSERVICES() {
  return (
    <div>
      <PERMITSERVICESPAGE/>
    </div>
  );
}

function ADREPAIRU() {
  return (
    <div>
      <ADREPAIRUPAGE/>
    </div>
  );
}

function ROOMADITION() {
  return (
    <div>
      <ROOMADITIONPAGE/>
    </div>
  );
}

function TENANTIMPROVEMENT() {
  return (
    <div>
      <TENANTIMPROVEMENTPAGE/>
    </div>
  );
}// END OF SERVICES
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
