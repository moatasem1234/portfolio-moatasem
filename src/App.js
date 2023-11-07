
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Totop from "./components/Totop";
function App() {
  return (
    <div className="">
      <Nav/>
      <Home/>
      <Totop/>
      <SocialLink/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      
    </div>
  );
}

export default App;
