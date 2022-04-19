import React, { useState } from "react";
import "./Card.css"
const Card = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(props);
  return (
    <div className="box btn_shadow">
      <div className="img">
        {" "}
        <img className="img-pic" src={props.image} onClick={toggleModal} />
      </div>
      <div className="category d_flex">
        <span onClick={toggleModal}>{props.category}</span>
      </div>
      <div className="title">
        <h2 onClick={toggleModal}>{props.title}</h2>
      </div>
    </div>
  );
};

export default Card;
