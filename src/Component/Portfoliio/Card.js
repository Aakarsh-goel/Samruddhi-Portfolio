import React from "react";
import "./Card.css"
const Card = (props) => {
  console.log(props);
  return (
    <div className="box btn_shadow">
      <div className="img">
        {" "}
        <img className="img-pic" src={props.image} />
      </div>
      <div className="category d_flex">
        <span>{props.category}</span>
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
