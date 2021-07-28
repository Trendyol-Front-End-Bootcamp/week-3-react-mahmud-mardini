import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/ui/Search';

it('should renders search section without crashing', () => {
    const search = renderer.create(
            <Search 
            getName={'Rick Sanchez'} 
            getGender={'male'} 
            getStatus={'alive'}
            />
    );
    expect(search).toMatchSnapshot();
});