import React from "react";

import "./../styles/styles.css";

function CharacterCard({ name, status, species, image, location, episode }) {
  return (
    <div className="character-card">

      <img className="character-card-image" src={image} alt="Character Card" />
          
      <div className="character-card-content">
        <div className="section">
          <a href="#">
              <h2 className="character-name">{name}</h2>
          </a>
          <span className="character-status">
            {status} - {species}
          </span>
        </div>
        <div className="section">
            <span className="text-gray">Last known location:</span>
            <a href="#">
                {location}
            </a>
        </div>
        <div className="section">
            <span class="text-gray">First seen in:</span>
            <a href="#">
                {episode}
            </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
