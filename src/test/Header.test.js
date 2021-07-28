import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/ui/Header';

it('should renders header without crashing', () => {
    const header = renderer.create( <Header /> );
    expect(header).toMatchSnapshot();
});