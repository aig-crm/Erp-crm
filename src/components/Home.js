import './App.css';
import PieChart from './PieChart';
import 'bootstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Table from './Table';
import React from 'react';

function Home(props) {
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
    <div className='Postform'>
      <h2 className="mt-3 text-dark"><b>{props.value} Tower REPORTS</b></h2>
      <h3 className="mt-3 text-dark">{props.value} Tower Unit report :</h3>
      <PieChart value={props.value}/>
      <h3 className="mt-3 text-dark">{props.value} Tower Demand-Reminder report :</h3>
      <DoughnutChart value={props.value}/>
      <h3 className="mt-3 text-dark">{props.value} Tower Unit type report :</h3>
      <BarChart value={props.value}/>
      <Table value={props.value}/>
    </div>
  );
}

export default Home;

