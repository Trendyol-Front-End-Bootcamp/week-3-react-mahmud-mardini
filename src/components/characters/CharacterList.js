import React from 'react'
import CharacterCard from './CharacterCard'
import Spinner from '../ui/Spinner'

const CharacterList = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards center'>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character}></CharacterCard>
      ))}
    </section>
  )
}

export default CharacterList
