import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marque from './components/marque'
import Textsection from './components/Textsection'
import Play from './components/Play'
import Featured from './components/Featured'
import Clientreview from './components/Clientreview'
import Ready from './components/Ready'
import Footer from './components/Footer'

import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll";



const App = () => {
  
const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 2
});


  return (
    <div id="main" data-scroll-container className="overflow-hidden ">
      <Navbar />
      <Landingpage />
      <Marque />
      <Textsection />
      <Play />
      <Featured />
      <Clientreview />
      <Ready />
      <Footer />
    </div>
  );
}

export default App