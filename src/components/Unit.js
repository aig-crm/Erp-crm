import './App.css';
import 'bootstrap';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import FlatDetails from './FlatDetails';
import CustomerDetails from './CustomerDetails';
import { Grid, Paper } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import { Pagination } from 'react-bootstrap';
import Api from './Api';
import { Link } from "react-router-dom";

function Unit() {

  const location = useLocation();
  const { from } = location.state;
  const { tower } = location.state;

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

  let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);

    const getData = () => {

        if (from != null) {
            return Api.get('/receipt_approved/' + "'" + (tower) + "'/" + "'" + (from) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/receipt_approved/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    const getData2 = () => {

        if (from != null) {
            return Api.get('/receipt_pending/' + "'" + (tower) + "'/" + "'" + (from) + "'").then(result => {
                const res = result.data;
                return setResult2(res);
            })
        } else {
            return Api.get('/receipt_pending/').then(result => {
                const res = result.data;
                return setResult2(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData2()
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result, currentPage]);

    const currentTableData2 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result2.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result2, currentPage]);

    const [resultDemand, setresultDemand] = useState([]);
    const [resultDemand1, setresultDemand1] = useState([]);
    const [resultDemand2, setresultDemand2] = useState([]);

    const getDataDemand = () => {

        if (from != null) {
            return Api.get('/demand/' + "'" + (tower) + "'/" + "'" + (from) + "'").then(resultDemand => {
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

        if (from != null) {
            return Api.get('/cpp/' + "'" + (tower) + "'/" + "'" + (from) + "'").then(resultDemand => {
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

        if (from != null) {
            return Api.get('/reminder/' + "'" + (tower) + "'/" + "'" + (from) + "'").then(resultDemand => {
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

  return (
    <div className='Postform' ref={printRef}>
      <Grid container spacing={3} className='Postform'>
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
          <Paper ><FlatDetails value={from} value2={tower} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper ><CustomerDetails value={from} value2={tower} /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper ></Paper>
        </Grid>
      </Grid>

      <React.Fragment>
            <div className="row">
                <div>
                    <h3 className="mt-3 text-dark"><b><u><center>Receipts of {from} unit</center></u></b></h3>

                    <table className="table-bordered text-black">
                    <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Date</th>
                                <th className="table">Payment Mode</th>
                                <th className="table">Bank Name</th>
                                <th className="table">Amt. Received with GST</th>
                                <th className="table">Amt. Received without GST</th>
                                <th className="table">Received GST</th>
                                <th className="table">Receipt No.</th>
                                <th className="table">Status</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.date}</td>
                                    <td>{res.payment_mode}</td>
                                    <td>{res.bank_name}</td>
                                    <td>{res.rwgst}</td>
                                    <td>{res.rwogst}</td>
                                    <td>{res.rgst}</td>
                                    <td>{res.receipt_no}</td>
                                    <td>{res.status}</td>
                                </tr>
                            )}
                            {currentTableData2.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#c61a09" }}>
                                    <td>{res.date}</td>
                                    <td>{res.payment_mode}</td>
                                    <td>{res.bank_name}</td>
                                    <td>{res.rwgst}</td>
                                    <td>{res.rwogst}</td>
                                    <td>{res.rgst}</td>
                                    <td>{res.receipt_no}</td>
                                    <td>{res.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={result.length + result2.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
      </React.Fragment>

      <React.Fragment>
            <div className="row">
                <div>
                    <h3 className="mt-3 text-dark"><b><u><center>Demand-Reminder of {from} unit</center></u></b></h3>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Perticulars</th>
                                <th className="table">ID</th>
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
                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower) }}>{res.id}</Link>
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
                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower) }}>{res.id}</Link>
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
                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower) }}>{res.id}</Link>
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
                </div>
            </div>
      </React.Fragment>

      <Link to='/receipt' state={{ unit_no: (from), tower: (tower) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>See Receipt Report</b></Link>
      <Link to='/addReceipt' state={{ unit_no: (from), tower: (tower) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Add Receipt</b></Link>

      <button type="button" onClick={handleDownloadPdf} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b><u>
        Download as PDF
      </u></b></button>
    </div>
  );
}

export default Unit;

