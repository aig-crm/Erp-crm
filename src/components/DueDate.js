import './App.css';
import 'bootstrap';
import React, { useState } from 'react';
import { NavBtn, NavBtnLink } from './NavbarElements';
import Axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';

function DueDate() {

  const location = useLocation();
  const printRef = React.useRef();
  const { from } = location.state;
  const { unit_no } = location.state;
  const { tower } = location.state;

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        if (from != null) {
          pdf.save((from) + '-demand filed for ' + (unit_no) + '.pdf');
        }else{
          pdf.save('Demand filed for.pdf');
        }
      };

  const [result, setResult] = useState("");

    const register = (e) => {
      e.preventDefault();
      alert((from) + '-demand filed for ' + (unit_no));
      Axios.put("https://0b61-2401-4900-1c61-299e-2440-7005-c383-15ce.in.ngrok.io/api/payments/" + "'" + (from) + "'", {
          due_date: result
      }).then((response) => {
          console.log(response);
      });
      handleDownloadPdf();

    }

  return (
    <div className='applicant' ref={printRef}>

        <div className="Postform">
        <Grid container spacing={3} className='Postform'>
        <Grid item xs={12}>
          <img className='img' src={pic1} alt="project"/>
          <img src={pic2} alt="project2"/>
        </Grid>
        </Grid>
            <h5><b><u>{from}-FILE DEMAND for {unit_no}</u></b></h5>
            <label className="Postform"><b>Due Date:</b></label>
              <input
                type="date"
                onChange={(e) => {
                  if (e.target.value === '' || e.target.value === null) {
                    setResult('NA');
                  } else { setResult(e.target.value)
                    console.log(result); }
                }} required />
              <NavBtn onClick={register}>
                  <NavBtnLink to='/'><b>Submit</b></NavBtnLink>
              </NavBtn>
        </div>
    </div>
  );
}

export default DueDate;

