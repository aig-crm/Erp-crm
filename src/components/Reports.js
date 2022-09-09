import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';

const Reports = () => {

    const location = useLocation();
    const printRef = React.useRef();
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
        if (tower != null) {
            pdf.save((tower) + '-tower reports.pdf');
        } else {
            pdf.save('reports.pdf');
        }
    };

    return (
        <div>
            <div className='Postform' ref={printRef}>
                <h2 className="mt-3 text-dark"><b>{tower} Tower REPORTS</b></h2>
                <div className='row'>
                    <div className='col'>
                        <h3 className="mt-3 text-dark">{tower} Tower Unit report :</h3>
                        <PieChart value={tower} />
                        <div>
                            <Link to='/inventory' className='applicant' style={{ backgroundColor: "#3AB4F2" }} state={{ tower: (tower) }}><b>See Full Report</b></Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h3 className="mt-3 text-dark">{tower} Tower Demand-Reminder report :</h3>
                        <DoughnutChart value={tower} />
                    </div>
                </div>
                <h3 className="mt-3 text-dark">{tower} Tower Unit type report :</h3>
                <BarChart value={tower} />
            </div>

            <button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </button>
        </div>
    )

}

export default Reports;