import './App.css';
import 'bootstrap';
import React from 'react';
import Navbar2 from './Navbar2';
import Home from './Home';

function A(props) {

  return (
    //  <div className="App">
    //    <header className="App-header">
    //      <UseEffectApi />
    //      <PostForm />
    //      <PieChart />
    //      <BarChart />
    //      <DoughnutChart />
    //    </header>
    //  </div> 
    <>
      <Navbar2 value={'bookingform'} />
      <Home value={props.value} />
    </>
  );
}

export default A;

