import React from 'react';
import ReactDOM from 'react-dom';
import App, { setName } from '../App';

it('should renders the app without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});