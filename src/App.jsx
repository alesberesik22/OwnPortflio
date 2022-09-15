import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experiences2";
import Contacts from "./components/contact/Contacts";
import Footer2 from "./components/footer/Footer2";
import Projects from "./components/projects/Projects2";
import ProjectInfo from "./components/projects/ProjectInfo";

import "./index.css";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project/:id" element={<ProjectInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
