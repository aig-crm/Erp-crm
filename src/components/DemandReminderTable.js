import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import { Grid } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';

function DemandReminderTable() {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [resultDemand, setresultDemand] = useState([]);
    const [resultDemand1, setresultDemand1] = useState([]);
    const [resultDemand2, setresultDemand2] = useState([]);
    const location = useLocation();
    const { tower } = location.state;
    const { unit_no } = location.state;

    const getDataDemand = () => {

        if (unit_no != null) {
            return Api.get('/demand/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand(res);
            })
        } else {
            return Api.get('/demand/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand(res);
            })
        }
    }

    const getDataDemand1 = () => {

        if (unit_no != null) {
            return Api.get('/cpp/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand1(res);
            })
        } else {
            return Api.get('/cpp/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand1(res);
            })
        }
    }

    const getDataDemand2 = () => {

        if (unit_no != null) {
            return Api.get('/reminder/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand2(res);
            })
        } else {
            return Api.get('/reminder/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand2(res);
            })
        }
    }

    useEffect(() => {
        getDataDemand()
    }, []);

    useEffect(() => {
        getDataDemand1()
    }, []);

    useEffect(() => {
        getDataDemand2()
    }, []);

    const currentTableDataDemand = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand, currentPage]);

    const currentTableDataDemand1 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand1.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand1, currentPage]);

    const currentTableDataDemand2 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand2.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand2, currentPage]);

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
        if (unit_no != null) {
          pdf.save((unit_no) + '-demand reminder report.pdf');
        }else{
          pdf.save('Demand reminder report.pdf');
        }
      };

    return (

        <React.Fragment>
            <div className="row" ref={printRef}>
                <Grid container spacing={3} className='Postform'>
                    <Grid item xs={12}>
                    <img className='img' src={pic1} alt="project"/>
                    <img src={pic2} alt="project2"/>
                    </Grid>
                </Grid>
                <div className="col-sm-8">
                    <h3 className="mt-3 text-dark"><b><u><center>Demand-Reminder of {unit_no} unit</center></u></b></h3>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Perticulars</th>
                                <th className="table">Due Date</th>
                                <th className="table">Net Base Selling Price</th>
                                <th className="table">GST</th>
                                <th className="table">Net Due Amount</th>
                                <th className="table">Received Amount</th>
                                <th className="table">Pending Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableDataDemand.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.particulars}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.net_bsp}</td>
                                    <td>{res.gst}</td>
                                    <td>{res.net_due}</td>
                                    <td>{res.recieved}</td>
                                    <td>{res.pending_amount}</td>
                                </tr>
                            )}
                            {currentTableDataDemand1.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.particulars}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.net_bsp}</td>
                                    <td>{res.gst}</td>
                                    <td>{res.net_due}</td>
                                    <td>{res.recieved}</td>
                                    <td>{res.pending_amount}</td>
                                </tr>
                            )}
                            {currentTableDataDemand2.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.particulars}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.net_bsp}</td>
                                    <td>{res.gst}</td>
                                    <td>{res.net_due}</td>
                                    <td>{res.recieved}</td>
                                    <td>{res.pending_amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={resultDemand.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                    <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DemandReminderTable