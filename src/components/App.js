import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import C from './C';
import B from './B';
import A from './A';
import Unit from './Unit';
import PostForm from './PostForm';
import Applicants from './Applicants';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/C' element={<C value={'C'} />} >
          <Route exact path='/C/bookingform/' element={<PostForm value={'C'} />} />
          <Route exact path='/C/applicant/' element={<Applicants value={'C'} />} />
        </Route>
        <Route exact path='/B' element={<B value={'B'} />} >
          <Route exact path='/B/bookingform/' element={<PostForm value={'B'} />} />
          <Route exact path='/B/applicant/' element={<Applicants value={'B'} />} />
        </Route>
        <Route exact path='/A' element={<A value={'A'} />} >
          <Route exact path='/A/bookingform/' element={<PostForm value={'A'} />} />
          <Route exact path='/A/applicant/' element={<Applicants value={'A'} />} />
        </Route>
        <Route exact path='/unit' element={<Unit />} />
      </Routes>
    </div>
  );
}

export default App;

