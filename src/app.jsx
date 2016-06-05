import React from 'react';
import { render } from 'react-dom';

let App = () => {
  return (
    <div>
      <h1 style={{color: 'gray'}}>
        Hello World!
      </h1>
    </div>
  );
}

render(<App/>, document.getElementById('root'));