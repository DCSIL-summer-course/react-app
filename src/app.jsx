import React from 'react';
import ReactDOM from 'react-dom';

let App = () => {
  return (
    <div>
      <h1 style={{color: 'gray'}}>
        Hello World!
      </h1>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));