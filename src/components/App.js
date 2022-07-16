import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostForm from './PostForm';
import 'bootstrap';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

function App() {
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/C' element={<PieChart />} />
          <Route exact path='/B' element={<DoughnutChart />} />
          <Route exact path='/A' element={<BarChart />} />
          <Route exact path='/bookingForm' element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

