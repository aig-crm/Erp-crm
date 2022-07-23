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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('App.pdf');
  };


  return (
    <div ref={printRef}>
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
          <Route exact path='/unit' element={<Unit />} />
        </Routes>

        <button type="button" onClick={handleDownloadPdf}>
          Download as PDF
        </button>
    </div>
  );
}

export default App;

