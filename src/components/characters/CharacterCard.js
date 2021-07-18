import React from 'react'

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
            <span className="text-gray">Last known location:</span>
            <a href="#">
                {character.origin.name}
            </a>
        </div>
        <div className="section">
            <span class="text-gray">First seen in:</span>
            <a href="#">
                {character.episode[0].slice(character.episode[0].indexOf("episode"))}
            </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
