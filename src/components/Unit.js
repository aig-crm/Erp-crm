import './App.css';
import 'bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ApplicantProfile from './ApplicantProfile';
import { Grid, Paper } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';

function Unit() {

  const location = useLocation();
  const { from } = location.state;

  const printRef = React.useRef();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

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
    pdf.save((from) + '.pdf');
  };

  return (
    <div className='Postform' ref={printRef}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img className='img' src={pic1} alt="project"/>
          <img src={pic2} alt="project2"/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h6 ><b><u>Customer id:</u> AR-{from}</b></h6>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h6 className="img"><b><u>APPLICANT FILE (AIG ROYAL)</u></b></h6>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h6 className="img"><b>Updated by CRM</b></h6>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h6 className="img"><b>{date} || {time}</b></h6>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ><ApplicantProfile value={from} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ><ApplicantProfile value={from} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ><ApplicantProfile value={from} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ><ApplicantProfile value={from} /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper ></Paper>
        </Grid>
      </Grid>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
}

export default Unit;

