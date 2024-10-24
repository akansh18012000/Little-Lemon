import React from "react";
import DishIcon from "../assets/Dish icon.svg";

const Cards = (props) => {
  const { img, name, price, description } = props;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-content-container">
        <div>
            <div className="card-name-price-container">
            <p className="card-name">{name}</p>
            <p className="card-price">{price}</p>
            </div>
            <p className="card-description">{description}</p>
        </div>
        <div className="card-cta-container">
          <p>Order a Delivery</p>
          <img src={DishIcon} alt="Dish Icon" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
