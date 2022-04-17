import React from "react";
import "./Card.css"

const Card = (props) => {
  return (
    <div className="box btn_shadow">
      <img className="img-card" src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href="">
        <i className="fas fa-arrow-right arrow"></i>
      </a>
    </div>
  );
};

export default Card;
