import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import C from './C';
import B from './B';
import A from './A';
import PostForm from './PostForm';

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
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/C' element={<C value={'C'}/>} >
            <Route exact path='/C/bookingform/' element={<PostForm value={'C'}/>} />
          </Route>
          <Route exact path='/B' element={<B value={'B'}/>} >
            <Route exact path='/B/bookingform/' element={<PostForm value={'B'}/>} />
          </Route>
          <Route exact path='/A' element={<A value={'A'}/>} >
            <Route exact path='/A/bookingform/' element={<PostForm value={'A'}/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;

