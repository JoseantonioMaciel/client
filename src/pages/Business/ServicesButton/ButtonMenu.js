import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="ADU" element={<ADU />} />
          <Route path="ASBUILT" element={<ASBUILT />} />
          <Route path="KITCHENREMODEL" element={<KITCHENREMODEL />} />
          <Route path="MULTISTORYDUPLEX" element={<MULTISTORYDUPLEX />} />
          <Route path="NEWHOME" element={<NEWHOME />} />
          <Route path="PERMITSERVICES" element={<PERMITSERVICES />} />
          <Route path="ADREPAIRU" element={<ADREPAIRU />} />
          <Route path="ROOMADITION" element={<ROOMADITION />} />
          <Route path="TENANTIMPROVEMENT" element={<TENANTIMPROVEMENT />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
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
    <div>
    <Button
      color="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
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
      <MenuItem  to="/ADU">ADU</MenuItem>
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
      <Outlet />
    </div>
  );
}


function ADU() {
  return (
    <div>
      <h2>ADU</h2>
    </div>
  );
}

function ASBUILT() {
  return (
    <div>
      <h2>ASBUILT</h2>
    </div>
  );
}

function KITCHENREMODEL() {
  return (
    <div>
      <h2>KITCHENREMODEL</h2>
    </div>
  );
}

function MULTISTORYDUPLEX() {
  return (
    <div>
      <h2>MULTISTORYDUPLEX</h2>
    </div>
  );
}

function NEWHOME() {
  return (
    <div>
      <h2>NEWHOME</h2>
    </div>
  );
}
function PERMITSERVICES() {
  return (
    <div>
      <h2>PERMITSERVICES</h2>
    </div>
  );
}

function ADREPAIRU() {
  return (
    <div>
      <h2>ADREPAIRU</h2>
    </div>
  );
}

function ROOMADITION() {
  return (
    <div>
      <h2>ROOMADITION</h2>
    </div>
  );
}

function TENANTIMPROVEMENT() {
  return (
    <div>
      <h2>TENANTIMPROVEMENT</h2>
    </div>
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
