import React from "react";
import HomePageBannerImage from "../assets/restauranfood.jpg";

const HomePageBanner = () => {
  return (
    <div className="homepage-banner">
      <div className="homepage-banner-content">
        <div className="homepage-banner-text">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="homepage-banner-image">
          <img src={HomePageBannerImage} alt="Home Page Banner" />
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
