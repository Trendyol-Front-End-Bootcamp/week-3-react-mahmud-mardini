import React from 'react';
import renderer from 'react-test-renderer';
import CharacterCard from '../components/characters/CharacterCard';

const characterData = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    gender: 'Male',
    species: 'Human',
    origin: {name: 'Earth (C-137)'}
};

it('Character Card Test', () => {
    const card = renderer.create(
            <CharacterCard character={characterData}/>
    )
    expect(card).toMatchSnapshot();
});