import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../components/ui/Spinner';

it('Spinner Test', () => {
    const spinner = renderer.create( <Spinner /> ).toJSON();
    expect(spinner).toMatchSnapshot();
});