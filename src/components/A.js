import './App.css';
import 'bootstrap';
import React from 'react';
import Home from './Home';

function A(props) {

  return (
    <div>
      <Home value={props.value} />
    </div>
  );
}

export default A;

