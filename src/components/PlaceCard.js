/* src/components/PlaceCard.js */
import React from "react";
import "./PlaceCard.css";

function PlaceCard({ title, description }) {
  return (
    <div className="place-card">
      <div className="card-image-placeholder"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PlaceCard;
