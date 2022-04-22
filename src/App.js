import React from "react";
import Header from "./Component/Head/Header";
import "./App.css";
import Home from "./Component/Hero/Home";
import Features from "./Component/Feature/Features";
import Portfolio from "./Component/Portfoliio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Dance from "./Component/DanceArena/Dance";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Dance />

      <Contact />
    </div>
  );
};

export default App;
