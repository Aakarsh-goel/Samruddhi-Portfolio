import React from "react";
import Header from "./Component/Head/Header";
import "./App.css";
import Home from "./Component/Hero/Home";
import Features from "./Component/Feature/Features";
import Portfolio from "./Component/Portfoliio/Portfolio";
import Contact from "./Component/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
