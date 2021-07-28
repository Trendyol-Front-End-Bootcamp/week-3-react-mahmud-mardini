import React from 'react';
import renderer from 'react-test-renderer';

import CharacterList from '../components/characters/CharacterList';

const characterData = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    gender: 'Male',
    species: 'Human',
    origin: {name: 'Earth (C-137)'},
    location: {name: 'Earth (Replacement Dimension)'}
};

it('Character Card List Test', () => {
    const characterCard = renderer.create(
            <CharacterList characters={[characterData]} />
    );
    expect(characterCard).toMatchSnapshot();
});