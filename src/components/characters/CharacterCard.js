import React from 'react'

// render the character card
function CharacterCard({ character }) {
  return (
    <div className="character-card">

      <img className="character-card-image" src={character.image} alt="Character Card" />
          
      <div className="character-card-content">
        <div className="section">
          <a href="#">
              <h2 className="character-name">{character.name}</h2>
          </a>
          <span className="character-status">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="section">
            <span className="text-gray">Gender:</span>
            <a className="character-gender" href="#">
                {character.gender}
            </a>
        </div>
        <div className="section">
            <span className="text-gray">Last known location:</span>
            <a className="character-location" href="#">
                {character.origin.name}
            </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
