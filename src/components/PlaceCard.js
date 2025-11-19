/* src/components/PlaceCard.js */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PlaceCard.css";

function PlaceCard({ id, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/place/${id}`);
    }
  };

  return (
    <div className="place-card" onClick={handleClick}>
      <div className="card-image-placeholder"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PlaceCard;
