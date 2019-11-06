import React from "react";
import "./styles.css";

const Card = props => {
  const { name, detail, img } = props;
  return (
    <div className="card dib br3  ma3 grow bw2 shadow5">
      <img className="grow" src={img} alt="hero_image" />
      <div className="card-text bg-black hover-bg-dark-red bg-animate card-text">
        <h2 className="tc f2 white">{name}</h2>
        <p className="tc white">{detail}</p>
      </div>
    </div>
  );
};
export default Card;
