import React from "react";
import { CardItem } from "../interfaces/inde";
import "./Card.scss";

export const Card = ({ ...rest }: CardItem) => {
  const { title, description, image } = rest;
  return (
    <div className="card-container">
      <div className="card-left">
        <span className="card-text">{title}</span>
        <span className="card-description">{description}</span>
      </div>
      <div className="card-right">
        <img src={image} alt={image} className="card-img" />
      </div>
    </div>
  );
};
