import './App.css';
import 'bootstrap';
import React from 'react';
import Navbar2 from './Navbar2';
import Home from './Home';

function C(props) {

  return (
    <>
      <Navbar2 value={'bookingform'} />
      <Home value={props.value} />
    </>
  );
}

export default C;

