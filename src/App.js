// Animation Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navgation from "./Components/nav";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// CSS
import './App.css'
import Home from "./Home";
import Services from "./services";
import Project from './projects';
import Protfolio from './protfolio';
import ContactUs from './ContactUs';
import End from './Components/end';
AOS.init();
export default function App() {
  
  return (
    <div>
    <Navgation/>
    <Home/>
    <Services/>
    <Project/>
    <Protfolio/>
    <ContactUs/>
    <End/>
   </div>
  );
}

