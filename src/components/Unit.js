import './App.css';
import 'bootstrap';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlatDetails from './FlatDetails';
import CustomerDetails from './CustomerDetails';
import { Grid, Paper } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import { Pagination } from 'react-bootstrap';
import Api from './Api';
import { Link } from "react-router-dom";
import { PDFExport } from '@progress/kendo-react-pdf';
import PageTemplate from './pageTemplate';

function Unit() {

    const location = useLocation();
    const { from } = location.state;
    const { tower } = location.state;
    const { gst_choice } = location.state;

    const pdfExportComponent = React.useRef(null);
    const pdfExportComponent2 = React.useRef(null);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();

    let PageSize = 50;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const [resultInterest, setResultInterest] = useState([]);
    const arr = [];
    const arrRwgst = [];
    const arrRwogst = [];
    const arrNet_bsp = [];
    const arrNet_due = [];
    const [resultOtherCharges, setResultOtherCharges] = useState([]);
    const arrbasic_cost = [];
    const arrgst = [];
    const arrtotal_cost = [];
    const arrpaid_cost = [];
    const arrbalance = [];

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

    const getDataInterest = () => {

        if ((from) != null) {
            return Api.get('/arr/' + "'" + (from) + "'").then(result => {
                const res = result.data;
                return setResultInterest(res);
            })
        } else {
            return Api.get('/arr/').then(result => {
                const res = result.data;
                return setResultInterest(res);
            })
        }
    }

    const getDataOtherCharges = () => {

        if ((from) != null) {
            return Api.get('/other_charges/' + "'" + (from) + "'").then(result => {
                const res = result.data;
                return setResultOtherCharges(res);
            })
        } else {
            return Api.get('/other_charges/').then(result => {
                const res = result.data;
                return setResultOtherCharges(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData2()
    }, []);

    useEffect(() => {
        getDataInterest()
    }, []);

    useEffect(() => {
        getDataOtherCharges()
    }, []);

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.ceil(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }

    function sumArray(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function sumArrayRwgst(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

    function sumArrayRwogst(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

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

    const currentTableDataInterest = useMemo(() => {
        const firstPageIndex = (currentPage2 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultInterest.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultInterest, currentPage2]);

    const currentTableDataOtherCharges = useMemo(() => {
        const firstPageIndex = (currentPage2 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultOtherCharges.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultOtherCharges, currentPage2]);

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
        const firstPageIndex = (currentPage1 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand, currentPage1]);

    const currentTableDataDemand1 = useMemo(() => {
        const firstPageIndex = (currentPage1 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand1.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand1, currentPage1]);

    const currentTableDataDemand2 = useMemo(() => {
        const firstPageIndex = (currentPage1 - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand2.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand2, currentPage1]);

    if (gst_choice === 'Excld GST') {
        return (
            <div className='Demand'>
                <PDFExport pageTemplate={PageTemplate} fileName={(from) + '.pdf'}
                    paperSize="A2"
                    ref={pdfExportComponent}>
                    <Grid container spacing={3} className='Postform'>
                        <Grid item xs={12}>
                            <img className='img' src={pic1} alt="project" />
                            <img src={pic2} alt="project2" />
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

                    <PDFExport pageTemplate={PageTemplate} fileName={'payment structure of-' + (from) + '.pdf'}
                        paperSize="A2"
                        ref={pdfExportComponent2}>
                        <React.Fragment>
                            <div className="row">
                                <div>
                                    <h3 className="mt-3 text-dark"><b><u><center>Payment Structure of {from} unit</center></u></b></h3>

                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr style={{ backgroundColor: "#0078AA" }}>
                                                <th className="table">Perticulars</th>
                                                <th className="table">Due Date</th>
                                                <th className="table">Net BSP</th>
                                                <th className="table">CGST</th>
                                                <th className="table">SGST</th>
                                                <th className="table">GST</th>
                                                <th className="table">Net Due Amount</th>
                                                <th className="table">Received Amount</th>
                                                <th className="table">Receivable Amount</th>
                                                <th className="table">ID</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.net_bsp)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.net_bsp}</td>
                                                    <td>{res.cgst}</td>
                                                    <td>{res.sgst}</td>
                                                    <td>{res.gst}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.pending_amount}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.net_bsp)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.net_bsp}</td>
                                                    <td>{res.cgst}</td>
                                                    <td>{res.sgst}</td>
                                                    <td>{res.gst}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.net_due - res.recieved}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand1.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.net_bsp)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.net_bsp}</td>
                                                    <td>{res.cgst}</td>
                                                    <td>{res.sgst}</td>
                                                    <td>{res.gst}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.pending_amount}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td><b>Total</b></td>
                                                    <td></td>
                                                    <td><b>Rs. {sumArray(arrNet_bsp)}</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><b>Rs. {sumArray(arrNet_due)}</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage1}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage1(page)}
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                    </PDFExport>

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
                                            <th className="table">Clearing Bank</th>
                                            <th className="table">Clearing Date</th>
                                            <th className="table">Receipt No.</th>
                                            <th className="table">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableData.map((res) => {
                                            arrRwgst.push(res.rwgst)
                                            arrRwogst.push(Math.round((res.rwgst) * 100 / 105))
                                            return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.date}</td>
                                                <td>{res.payment_mode}</td>
                                                <td>{res.bank_name}</td>
                                                <td>{res.rwgst}</td>
                                                <td>{Math.round((res.rwgst) * 100 / 105)}</td>
                                                <td>{Math.round(res.rwgst - (res.rwgst) * 100 / 105)}</td>
                                                <td>{res.clearing_bank}</td>
                                                <td>{res.clearing_date}</td>
                                                <td>{res.receipt_no}</td>
                                                <td>{res.status}</td>
                                            </tr>)
                                        }
                                        )}
                                        {currentTableData2.map((res) => {
                                            arrRwgst.push(res.rwgst)
                                            arrRwogst.push(Math.round((res.rwgst) * 100 / 105))
                                            return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.date}</td>
                                                <td>{res.payment_mode}</td>
                                                <td>{res.bank_name}</td>
                                                <td>{res.rwgst}</td>
                                                <td>{Math.round((res.rwgst) * 100 / 105)}</td>
                                                <td>{Math.round(res.rwgst - (res.rwgst) * 100 / 105)}</td>
                                                <td>{res.clearing_bank}</td>
                                                <td>{res.clearing_date}</td>
                                                <td>{res.receipt_no}</td>
                                                <td style={{ backgroundColor: "#c61a09" }}>{res.status}</td>
                                            </tr>)
                                        }
                                        )}
                                        <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                            <td className="Postform"><b>Total</b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwgst(arrRwgst)}</b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwogst(arrRwogst)}</b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwgst(arrRwgst) - sumArrayRwogst(arrRwogst)}</b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                        </tr>
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
                            <div >
                                <h3 className="mt-3 text-dark"><b><u><center>{from} Interest Report</center></u></b></h3>

                                <table className="table-bordered text-black">
                                    <thead>
                                        <tr style={{ backgroundColor: "#0078AA" }}>
                                            <th className="table">INSTALLMENT NAME</th>
                                            <th className="table">INSTALLMENT DATE</th>
                                            <th className="table">DUE AMOUNT</th>
                                            <th className="table">AMOUNT RECEIVED</th>
                                            <th className="table">DATE OF RECEIVED</th>
                                            <th className="table">BALANCE AMOUNT</th>
                                            <th className="table">DELAY DAYS</th>
                                            <th className="table">GRACE PERIOD</th>
                                            <th className="table">INTEREST PERIOD</th>
                                            <th className="table">ROI</th>
                                            <th className="table">INTEREST AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataInterest.map((res) => {
                                            if (getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) < 0) {
                                                arr.push(0)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{Math.round(parseInt(res.due_amt) * 100 / 105)}</td>
                                                    <td>{Math.round(parseInt(res.received_amt) * 100 / 105)}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{Math.round((parseInt(res.due_amt) * 100 / 105) - (parseInt(res.received_amt) * 100 / 105))}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>0</td>
                                                </tr>)
                                            }
                                            else if (parseInt(parseInt(res.due_amt) * 100 / 105) < (parseInt(res.received_amt) * 100 / 105) && getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) > 0) {
                                                arr.push(Math.round((parseInt(res.due_amt) * 100 / 105) * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{Math.round(parseInt(res.due_amt) * 100 / 105)}</td>
                                                    <td>{Math.round(parseInt(res.received_amt) * 100 / 105)}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{Math.round((parseInt(res.due_amt) * 100 / 105) - (parseInt(res.received_amt) * 100 / 105))}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>{Math.round((parseInt(res.due_amt) * 100 / 105) * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365)}</td>
                                                </tr>)
                                            } else if ((res.due_date === '')) {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>

                                                </tr>)
                                            } else if ((isNaN(res.due_amt))) {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>

                                                </tr>)
                                            }
                                            else {
                                                arr.push(Math.round((parseInt(res.received_amt) * 100 / 105) * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{Math.round(parseInt(res.due_amt) * 100 / 105)}</td>
                                                    <td>{Math.round(parseInt(res.received_amt) * 100 / 105)}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{Math.round((parseInt(res.due_amt) * 100 / 105) - (parseInt(res.received_amt) * 100 / 105))}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>{Math.round(parseInt(res.received_amt) * 100 / 105 * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365)}</td>
                                                </tr>)
                                            }
                                        }
                                        )}
                                        {

                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>Total Interest</b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b>Rs. {sumArray(arr)}</b></td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage2}
                                    totalCount={resultInterest.length - 1}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage2(page)}
                                />

                            </div>
                        </div>
                    </React.Fragment>

                    <React.Fragment>
                        <div className="row">
                            <div >
                                <h3 className="mt-3 text-dark"><b><u><center>{from} Other Charges</center></u></b></h3>

                                <table className="table-bordered text-black">
                                    <thead>
                                        <tr style={{ backgroundColor: "#0078AA" }}>
                                            <th className="table">PARAMETERS</th>
                                            <th className="table">BASIC COST</th>
                                            <th className="table">GST</th>
                                            <th className="table">TOTAL COST</th>
                                            <th className="table">PAID</th>
                                            <th className="table">BALANCE</th>
                                            <th className="table">ID</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataOtherCharges.map((res) => {
                                            if ((res.parameters) === "INTEREST FREE MAINTENANCE SECURITY (IFMS)") {
                                                arrbasic_cost.push(Math.round(res.basic_cost))
                                                arrgst.push(0)
                                                arrtotal_cost.push(Math.round(res.basic_cost))
                                                arrpaid_cost.push(Math.round(res.paid_cost))
                                                arrbalance.push(Math.round(res.basic_cost - res.paid_cost))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.parameters}</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>0</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>{Math.round(res.paid_cost)}</td>
                                                    <td>{Math.round(res.basic_cost - res.paid_cost)}</td>
                                                    <Link to='/editOtherCharges' state={{ id: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), parameters: (res.parameters), basic_cost: Math.round(res.basic_cost), paid_cost: Math.round(res.paid_cost) }}>{res.id}</Link>
                                                </tr>)
                                            } else {
                                                arrbasic_cost.push(Math.round(res.basic_cost))
                                                arrgst.push(Math.round(res.basic_cost * 0.18))
                                                arrtotal_cost.push(Math.round(res.basic_cost + res.basic_cost * 0.18))
                                                arrpaid_cost.push(Math.round(res.paid_cost))
                                                arrbalance.push(Math.round(res.basic_cost + res.basic_cost * 0.18 - res.paid_cost))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.parameters}</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>{Math.round(res.basic_cost * 0.18)}</td>
                                                    <td>{Math.round(res.basic_cost + res.basic_cost * 0.18)}</td>
                                                    <td>{Math.round(res.paid_cost)}</td>
                                                    <td>{Math.round(res.basic_cost + res.basic_cost * 0.18 - res.paid_cost)}</td>
                                                    <Link to='/editOtherCharges' state={{ id: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), parameters: (res.parameters), basic_cost: Math.round(res.basic_cost), paid_cost: Math.round(res.paid_cost) }}>{res.id}</Link>
                                                </tr>)
                                            }
                                        }
                                        )}
                                        {

                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>Total: </b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrbasic_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrgst)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrtotal_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrpaid_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrbalance)}</b></td>
                                                <td className="Postform"><b></b></td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage2}
                                    totalCount={resultInterest.length - 1}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage2(page)}
                                />

                            </div>
                        </div>
                    </React.Fragment>

                </PDFExport>
                <Link to='/receipt' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>See Receipt Report</b></Link>
                <Link to='/reportD' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>See Demand Report</b></Link>
                <Link to='/addReceipt' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Add Receipt</b></Link>
                <Link to='/otherCharges' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Add Other Charges</b></Link>
                <Link to='/welcome' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Generate Welcome Letter</b></Link>
                <Link to='/uploadFile' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Upload Documents</b></Link>

                <button
                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                    onClick={() => {
                        if (pdfExportComponent.current) {
                            pdfExportComponent.current.save();
                        }
                    }}
                ><b><u>Export PDF</u></b>
                </button>

                <button
                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                    onClick={() => {
                        if (pdfExportComponent2.current) {
                            pdfExportComponent2.current.save();
                        }
                    }}
                >
                    <b><u>Export payment structure</u></b>
                </button>
            </div>
        );
    } else {
        return (
            <div className='Demand'>
                <PDFExport pageTemplate={PageTemplate} fileName={(from) + '.pdf'}
                    paperSize="A2"
                    ref={pdfExportComponent}>
                    <Grid container spacing={3} className='Postform'>
                        <Grid item xs={12}>
                            <img className='img' src={pic1} alt="project" />
                            <img src={pic2} alt="project2" />
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

                    <PDFExport pageTemplate={PageTemplate} fileName={'payment structure of-' + (from) + '.pdf'}
                        paperSize="A2"
                        ref={pdfExportComponent2}>
                        <React.Fragment>
                            <div className="row">
                                <div>
                                    <h3 className="mt-3 text-dark"><b><u><center>Payment Structure of {from} unit</center></u></b></h3>

                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr style={{ backgroundColor: "#0078AA" }}>
                                                <th className="table">Perticulars</th>
                                                <th className="table">Due Date</th>
                                                <th className="table">Net BSP</th>
                                                <th className="table">Due Amount</th>
                                                <th className="table">Received Amount</th>
                                                <th className="table">Receivable Amount</th>
                                                <th className="table">ID</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.net_due)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.pending_amount}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.net_due)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.net_due - res.recieved}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand1.map((res) => {
                                                arrNet_due.push(res.net_due)
                                                arrNet_bsp.push(res.due)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.due}</td>
                                                    <td>{res.net_due}</td>
                                                    <td>{res.recieved}</td>
                                                    <td>{res.pending_amount}</td>
                                                    <Link to='/dueDate' state={{ from: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), interest_value: arr }}>{res.id}</Link>
                                                </tr>)
                                            }
                                            )}
                                            {
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td><b>Total</b></td>
                                                    <td></td>
                                                    <td><b>Rs. {sumArray(arrNet_bsp)}</b></td>
                                                    <td><b>Rs. {sumArray(arrNet_due)}</b></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage1}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage1(page)}
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                    </PDFExport>

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
                                            <th className="table">Clearing Bank</th>
                                            <th className="table">Clearing Date</th>
                                            <th className="table">Receipt No.</th>
                                            <th className="table">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableData.map((res) => {
                                            arrRwgst.push(res.rwgst)
                                            arrRwogst.push(res.rwogst)
                                            return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.date}</td>
                                                <td>{res.payment_mode}</td>
                                                <td>{res.bank_name}</td>
                                                <td>{res.rwgst}</td>
                                                <td>{res.rwogst}</td>
                                                <td>{res.rgst}</td>
                                                <td>{res.clearing_bank}</td>
                                                <td>{res.clearing_date}</td>
                                                <td>{res.receipt_no}</td>
                                                <td>{res.status}</td>
                                            </tr>)
                                        }
                                        )}
                                        {currentTableData2.map((res) => {
                                            arrRwgst.push(res.rwgst)
                                            arrRwogst.push(res.rwogst)
                                            return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.date}</td>
                                                <td>{res.payment_mode}</td>
                                                <td>{res.bank_name}</td>
                                                <td>{res.rwgst}</td>
                                                <td>{res.rwogst}</td>
                                                <td>{res.rgst}</td>
                                                <td>{res.clearing_bank}</td>
                                                <td>{res.clearing_date}</td>
                                                <td>{res.receipt_no}</td>
                                                <td style={{ backgroundColor: "#c61a09" }}>{res.status}</td>
                                            </tr>)
                                        }
                                        )}
                                        <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                            <td className="Postform"><b>Total</b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwgst(arrRwgst)}</b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwogst(arrRwogst)}</b></td>
                                            <td className="Postform"><b>Rs.{sumArrayRwgst(arrRwgst) - sumArrayRwogst(arrRwogst)}</b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                            <td className="Postform"><b></b></td>
                                        </tr>
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
                            <div >
                                <h3 className="mt-3 text-dark"><b><u><center>{from} Interest Report</center></u></b></h3>

                                <table className="table-bordered text-black">
                                    <thead>
                                        <tr style={{ backgroundColor: "#0078AA" }}>
                                            <th className="table">INSTALLMENT NAME</th>
                                            <th className="table">INSTALLMENT DATE</th>
                                            <th className="table">DUE AMOUNT</th>
                                            <th className="table">AMOUNT RECEIVED</th>
                                            <th className="table">DATE OF RECEIVED</th>
                                            <th className="table">BALANCE AMOUNT</th>
                                            <th className="table">DELAY DAYS</th>
                                            <th className="table">GRACE PERIOD</th>
                                            <th className="table">INTEREST PERIOD</th>
                                            <th className="table">ROI</th>
                                            <th className="table">INTEREST AMOUNT</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataInterest.map((res) => {
                                            if (getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) < 0) {
                                                arr.push(0)
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.due_amt}</td>
                                                    <td>{res.received_amt}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{parseInt(res.due_amt) - parseInt(res.received_amt)}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>0</td>
                                                </tr>)
                                            }
                                            else if (parseInt(res.due_amt) < parseInt(res.received_amt) && getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) > 0) {
                                                arr.push(Math.round(res.due_amt * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.due_amt}</td>
                                                    <td>{res.received_amt}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{parseInt(res.due_amt) - parseInt(res.received_amt)}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>{Math.round(res.due_amt * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365)}</td>
                                                </tr>)
                                            } else if ((res.due_date === '')) {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>

                                                </tr>)
                                            } else if ((isNaN(res.due_amt))) {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>

                                                </tr>)
                                            }
                                            else {
                                                arr.push(Math.round(res.received_amt * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.description}</td>
                                                    <td>{res.due_date}</td>
                                                    <td>{res.due_amt}</td>
                                                    <td>{res.received_amt}</td>
                                                    <td>{res.received_date}</td>
                                                    <td>{parseInt(res.due_amt) - parseInt(res.received_amt)}</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>0</td>
                                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                                    <td>10</td>
                                                    <td>{Math.round(res.received_amt * getDifferenceInDays(new Date(res.due_date), new Date(res.received_date)) * 0.1 / 365)}</td>
                                                </tr>)
                                            }
                                        }
                                        )}
                                        {

                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>Total Interest</b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b></b></td>
                                                <td className="Postform"><b>Rs. {sumArray(arr)}</b></td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage2}
                                    totalCount={resultInterest.length - 1}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage2(page)}
                                />

                            </div>
                        </div>
                    </React.Fragment>

                    <React.Fragment>
                        <div className="row">
                            <div >
                                <h3 className="mt-3 text-dark"><b><u><center>{from} Other Charges</center></u></b></h3>

                                <table className="table-bordered text-black">
                                    <thead>
                                        <tr style={{ backgroundColor: "#0078AA" }}>
                                            <th className="table">PARAMETERS</th>
                                            <th className="table">BASIC COST</th>
                                            <th className="table">GST</th>
                                            <th className="table">TOTAL COST</th>
                                            <th className="table">PAID</th>
                                            <th className="table">BALANCE</th>
                                            <th className="table">ID</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataOtherCharges.map((res) => {
                                            if ((res.parameters) === "INTEREST FREE MAINTENANCE SECURITY (IFMS)") {
                                                arrbasic_cost.push(Math.round(res.basic_cost))
                                                arrgst.push(0)
                                                arrtotal_cost.push(Math.round(res.basic_cost))
                                                arrpaid_cost.push(Math.round(res.paid_cost))
                                                arrbalance.push(Math.round(res.basic_cost - res.paid_cost))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.parameters}</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>0</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>{Math.round(res.paid_cost)}</td>
                                                    <td>{Math.round(res.basic_cost - res.paid_cost)}</td>
                                                    <Link to='/editOtherCharges' state={{ id: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), parameters: (res.parameters), basic_cost: Math.round(res.basic_cost), paid_cost: Math.round(res.paid_cost) }}>{res.id}</Link>
                                                </tr>)
                                            } else {
                                                arrbasic_cost.push(Math.round(res.basic_cost))
                                                arrgst.push(Math.round(res.basic_cost * 0.18))
                                                arrtotal_cost.push(Math.round(res.basic_cost + res.basic_cost * 0.18))
                                                arrpaid_cost.push(Math.round(res.paid_cost))
                                                arrbalance.push(Math.round(res.basic_cost + res.basic_cost * 0.18 - res.paid_cost))
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td>{res.parameters}</td>
                                                    <td>{Math.round(res.basic_cost)}</td>
                                                    <td>{Math.round(res.basic_cost * 0.18)}</td>
                                                    <td>{Math.round(res.basic_cost + res.basic_cost * 0.18)}</td>
                                                    <td>{Math.round(res.paid_cost)}</td>
                                                    <td>{Math.round(res.basic_cost + res.basic_cost * 0.18 - res.paid_cost)}</td>
                                                    <Link to='/editOtherCharges' state={{ id: (res.id), unit_no: (from), tower: (tower), gst_choice: (gst_choice), parameters: (res.parameters), basic_cost: Math.round(res.basic_cost), paid_cost: Math.round(res.paid_cost) }}>{res.id}</Link>
                                                </tr>)
                                            }
                                        }
                                        )}
                                        {

                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>Total: </b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrbasic_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrgst)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrtotal_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrpaid_cost)}</b></td>
                                                <td className="Postform"><b>Rs. <br />{sumArray(arrbalance)}</b></td>
                                                <td className="Postform"><b></b></td>
                                            </tr>

                                        }
                                    </tbody>
                                </table>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage2}
                                    totalCount={resultInterest.length - 1}
                                    pageSize={PageSize}
                                    onPageChange={page => setCurrentPage2(page)}
                                />

                            </div>
                        </div>
                    </React.Fragment>

                </PDFExport>
                <Link to='/receipt' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>See Receipt Report</b></Link>
                <Link to='/reportD' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>See Demand Report</b></Link>
                <Link to='/addReceipt' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Add Receipt</b></Link>
                <Link to='/otherCharges' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Add Other Charges</b></Link>
                <Link to='/welcome' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Generate Welcome Letter</b></Link>
                <Link to='/uploadFile' state={{ unit_no: (from), tower: (tower), gst_choice: (gst_choice) }} className='applicant' style={{ backgroundColor: "#3AB4F2" }}><b>Upload Documents</b></Link>

                <button
                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                    onClick={() => {
                        if (pdfExportComponent.current) {
                            pdfExportComponent.current.save();
                        }
                    }}
                >
                    <b><u>Export PDF</u></b>
                </button>

                <button
                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                    onClick={() => {
                        if (pdfExportComponent2.current) {
                            pdfExportComponent2.current.save();
                        }
                    }}
                >
                    <b><u>Export payment structure</u></b>
                </button>
            </div>
        );
    }
}

export default Unit;

