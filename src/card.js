import React from "react";
import "./styles.css";

const Card = props => {
  const { name, detail, img } = props;
  return (
    <div className="card dib br3 pa3 ma2 grow bw2 shadow5">
      <img src={img} alt="hero_image" />
      <div className="bg-black hover-bg-dark-red bg-animate card-text">
        <h2 className="tc f2 white">{name}</h2>
        <p className="tc white">{detail}</p>
      </div>
    </div>
  );
};
export default Card;
