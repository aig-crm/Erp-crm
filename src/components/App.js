import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import D from './D';
import C from './C';
import B from './B';
import A from './A';
import Unit from './Unit';
import PostForm from './PostForm';
import Applicants from './Applicants';
import DueDate from './DueDate';
import ReceiptTable from './ReceiptTable';
import DemandTable from './DemandTable';
import ReminderTable from './ReminderTable';
import InventoryTable from './InventoryTable';
import ReceiptForm from './ReceiptForm';
import Table from './Table';
import Reports from './Reports';
import ReceiptEdit from './ReceiptEdit';
import CancelBookings from './CancelBookings';
import CanceledBookings from './CanceledBookings';
import DeleteBooking from './DeleteBooking';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} >
          <Route exact path='/reports' element={<Reports />} />
          <Route exact path='/bookings' element={<Table />} />
        </Route>
        <Route exact path='/D' element={<D value={'D'} />} >
          <Route exact path='/D/bookingform/' element={<PostForm value={'D'} />} />
          <Route exact path='/D/applicant/' element={<Applicants value={'D'} />} />
          <Route exact path='/D/reports' element={<Reports />} />
          <Route exact path='/D/bookings' element={<Table />} />
          <Route exact path='/D/CancelBookings' element={<CancelBookings value={'D'} />} />
          <Route exact path='/D/CanceledBookings' element={<CanceledBookings value={'D'} />} />
        </Route>
        <Route exact path='/C' element={<C value={'C'} />} >
          <Route exact path='/C/bookingform/' element={<PostForm value={'C'} />} />
          <Route exact path='/C/applicant/' element={<Applicants value={'C'} />} />
          <Route exact path='/C/reports' element={<Reports />} />
          <Route exact path='/C/bookings' element={<Table />} />
          <Route exact path='/C/cancelBookings' element={<CancelBookings value={'C'} />} />
          <Route exact path='/C/canceledBookings' element={<CanceledBookings value={'C'} />} />
        </Route>
        <Route exact path='/B' element={<B value={'B'} />} >
          <Route exact path='/B/bookingform/' element={<PostForm value={'B'} />} />
          <Route exact path='/B/applicant/' element={<Applicants value={'B'} />} />
          <Route exact path='/B/reports' element={<Reports />} />
          <Route exact path='/B/bookings' element={<Table />} />
          <Route exact path='/B/cancelBookings' element={<CancelBookings value={'B'} />} />
          <Route exact path='/B/canceledBookings' element={<CanceledBookings value={'B'} />} />
        </Route>
        <Route exact path='/A' element={<A value={'A'} />} >
          <Route exact path='/A/bookingform/' element={<PostForm value={'A'} />} />
          <Route exact path='/A/applicant/' element={<Applicants value={'A'} />} />
          <Route exact path='/A/reports' element={<Reports />} />
          <Route exact path='/A/bookings' element={<Table />} />
          <Route exact path='/A/cancelBookings' element={<CancelBookings value={'A'} />} />
          <Route exact path='/A/canceledBookings' element={<CanceledBookings value={'A'} />} />
        </Route>
        <Route exact path='/unit' element={<Unit />} />
        <Route exact path='/dueDate' element={<DueDate />} />
        <Route exact path='/receipt' element={<ReceiptTable />} />
        <Route exact path='/reportD' element={<DemandTable />} />
        <Route exact path='/reportR' element={<ReminderTable />} />
        <Route exact path='/inventory' element={<InventoryTable />} />
        <Route exact path='/addReceipt' element={<ReceiptForm />} />
        <Route exact path='/receiptEdit' element={<ReceiptEdit />} />
        <Route exact path='/deleteBooking' element={<DeleteBooking />} />
      </Routes>
    </div>
  );
}

export default App;

