import React from "react";
import Card from "./Card";
import "./Portfolio.css";
import Design from "./Portfolio_data";

const Portfolio = () => {
  return (
    <section className="portfolio top" id="portfolio">
      <div className="container">
        <div className="heading ">
          <h4>VISIT MY PORTFOLIO</h4>
          <h1> Portfolio </h1>
        </div>
        <div className="content grid">
          {Design.map((value, index) => {
            return (
              <Card
                key={index}
                image={value.image}
                category={value.category}
                title={value.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
