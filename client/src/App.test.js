import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('Renders with out crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// test('sample test', () => {
//   expect(true).toBe(true)
// })

