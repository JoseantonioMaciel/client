import * as React from 'react';
import Hero from "./Hero/Hero"
import MediaCard from "./MediaCard/MediaCard.jsx"
import OurProcess from "./OurProcess/ProcessCards.jsx"
import Services from "./Services/Services.js"



export default function Main() {
  return (
<div>
  <Hero/>
  <MediaCard/>
  <OurProcess/>
  <Services/>
</div>
);
}

