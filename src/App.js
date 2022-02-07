
import './App.css';
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from "./pages/Footer/Footer"

export default function App() {
  return (
    <div>
      <h1> Nave</h1>
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
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About UDS</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
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
