import React from "react";
import About from "../about/About";
import Contacts from "../contact/Contacts";
import Experiences from "../experience/Experiences2";
import Footer2 from "../footer/Footer2";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects2";

import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <Contacts />
      <Footer2 />
    </motion.div>
  );
}

export default Home;
