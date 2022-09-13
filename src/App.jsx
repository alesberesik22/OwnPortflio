import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experiences2";
import Contacts from "./components/contact/Contacts";
import Footer2 from "./components/footer/Footer2";
import Projects from "./components/projects/Projects";

import "./index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <Footer2 />
    </div>
  );
};

export default App;
