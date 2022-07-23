import './App.css';
import 'bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Unit() {

    const location = useLocation();
    const { from } = location.state;

  return (
    <div className='Postform'>
      <h2 className="mt-3 text-dark"><b>{from}</b></h2>
    </div>
  );
}

export default Unit;

