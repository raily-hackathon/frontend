/* src/components/RecommendationSection.js */
import React from "react";
import PlaceCard from "./PlaceCard";
import "./RecommendationSection.css";

function RecommendationSection({ title, places }) {
  return (
    <section className="recommendation-section">
      <h2>{title}</h2>
      <div className="card-list">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendationSection;
