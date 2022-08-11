import React from "react";
import { Parallax } from "react-parallax";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experiences";
import Contacts from "./components/contact/Contacts";
import Footer2 from "./components/footer/Footer2";
import Testimonial from "./components/testimonial/Testimonial";
import Projects from "./components/projects/Projects";

import background from "./assets/images/portrait.jpg";

import "./index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Parallax
        bgImage={background}
        strength={1010}
        bgImageStyle={{ maxWidth: "100%", height: "100%" }}
      >
        <Nav />
        <About />
        <Experiences />
        <Testimonial />
        <Projects />
        <Contacts />
        <Footer2 />
      </Parallax>
    </div>
  );
};

export default App;
