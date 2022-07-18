import './App.css';
import PieChart from './PieChart';
import 'bootstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Table from './Table';
import React from 'react';

function Home() {
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
      <h2 className="mt-3 text-dark"><b>REPORTS</b></h2>
      <h3 className="mt-3 text-dark">Unit report :</h3>
      <PieChart />
      <h3 className="mt-3 text-dark">Demand-Reminder report :</h3>
      <DoughnutChart />
      <h3 className="mt-3 text-dark">Unit type report :</h3>
      <BarChart />
      <Table />
    </div>
  );
}

export default Home;

