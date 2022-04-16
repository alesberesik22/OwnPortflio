import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experiences";
import Contacts from "./components/contact/Contacts";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Projects from "./components/projects/Projects";

import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Testimonial />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
