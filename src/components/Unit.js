import './App.css';
import 'bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Unit() {

  const location = useLocation();
  const { from } = location.state;

  const printRef = React.useRef();

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
      <h2 className="mt-3 text-dark"><b>{from}</b></h2>

      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
}

export default Unit;

