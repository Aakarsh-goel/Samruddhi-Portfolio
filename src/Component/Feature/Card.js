import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="box btn_shadow">
      <img className="img-card" src={props.image} />
      <h2>{props.title}</h2>
      <p className="feature-text">{props.desc}</p>
    </div>
  );
};

export default Card;
