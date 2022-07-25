import './App.css';
import 'bootstrap';
import React from 'react';
import Navbar2 from './Navbar2';
import Home from './Home';

function A(props) {

  return (
    <div>
      <Navbar2 value={'bookingform'} />
      <Home value={props.value} />
    </div>
  );
}

export default A;

