import './App.css';
import PieChart from './PieChart';
import 'bootstrap';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Table from './Table';
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Home(props) {

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
    <div className='Postform' ref={printRef}>
      <h2 className="mt-3 text-dark"><b>{props.value} Tower REPORTS</b></h2>
      <h3 className="mt-3 text-dark">{props.value} Tower Unit report :</h3>
      <PieChart value={props.value}/>
      <h3 className="mt-3 text-dark">{props.value} Tower Demand-Reminder report :</h3>
      <DoughnutChart value={props.value}/>
      <h3 className="mt-3 text-dark">{props.value} Tower Unit type report :</h3>
      <BarChart value={props.value}/>
      <Table value={props.value}/>

        <button type="button" onClick={handleDownloadPdf}>
          Download as PDF
        </button>
    </div>
  );
}

export default Home;

