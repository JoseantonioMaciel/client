
import './App.css';
import Hero from "./pages/Hero/Hero";
import Header from "./pages/Header/header";
import MediaCard from "./pages/MediaCard/MediaCard";
import Services from "./pages/services/Services";
import PROCESS from "./pages/OurProcess/ProcessCards";
import LETSBEGIN from "./pages/LetsBegin/LetsBegin";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div >  
    
    <Header/>
    <Hero/>
    <MediaCard/>
    <Services/>
    <PROCESS/>
    <LETSBEGIN/>
    <Footer/>
    </div>
  );
}

export default App;
