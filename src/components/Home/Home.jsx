import React from "react";
import About from "../about/About";
import Contacts from "../contact/Contacts";
import Experiences from "../experience/Experiences2";
import Footer2 from "../footer/Footer2";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects2";

function Home() {
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
}

export default Home;
