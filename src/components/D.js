import './App.css';
import 'bootstrap';
import React from 'react';
import Home from './Home';

function D(props) {

  return (
    <div >
      <Home value={props.value} />
    </div>
  );
}

export default D;

