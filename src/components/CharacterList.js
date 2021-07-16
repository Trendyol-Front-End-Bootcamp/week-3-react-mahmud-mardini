import React from "react";
import CharacterCard from "./CharacterCard";
import "./../styles/styles.css";

function CharacterList({ characters }) {

 
  return (
    <div className="character-list">
      
      {
        characters?.map((character) => (
          <CharacterCard
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            location={character.origin.name}
            episode={character.episode[0].slice(character.episode[0].indexOf("episode"))  }
          />
        ))}
    </div>
  );
}

export default CharacterList;
