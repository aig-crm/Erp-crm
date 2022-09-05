import './App.css';
import 'bootstrap';
import React from 'react';
import Home from './Home';

function B(props) {

  return (
    <div>
      <Home value={props.value} />
    </div>
  );
}

export default B;

