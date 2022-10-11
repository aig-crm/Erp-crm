import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import ApplicantDetails from "./ApplicantDetails";
import StatementSubject from "./StatementSubject";
import DemandStatement from "./DemandStatement";

function ReminderTable() {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [resultDemand, setresultDemand] = useState([]);
    const [resultDemand1, setresultDemand1] = useState([]);
    const [resultDemand2, setresultDemand2] = useState([]);
    const [resultDemand3, setresultDemand3] = useState([]);
    const location = useLocation();
    const { tower } = location.state;
    const { unit_no } = location.state;
    const { id } = location.state;
    const { gst_choice } = location.state;
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

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

    const getDataDemand3 = () => {

        if (unit_no != null) {
            return Api.get('/total/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand3(res);
            })
        } else {
            return Api.get('/total/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand3(res);
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

    useEffect(() => {
        getDataDemand3()
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

    const currentTableDataDemand3 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand3.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand3, currentPage]);

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
            pdf.save((unit_no) + '-reminder report.pdf');
        } else {
            pdf.save('Reminder report.pdf');
        }
    };

    if (gst_choice === 'Excld GST') {
        return (

            <React.Fragment>
                <button type="button" onClick={handleDownloadPdf}>
                    Download as PDF
                </button>
                <div ref={printRef} className='Demand'>
                    <Grid container spacing={3} className='Postform'>
                        <Grid item xs={12}>
                            <h6 className="Postform"><b><u><center>Reminder Letter</center></u></b></h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ApplicantDetails value={unit_no} value2={tower} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="Postform">
                                <h6 ><b>Dated: </b>{date}</h6>
                                <br></br>
                                <h6><b>ALPINE INFRA PROJECTS PVT LTD</b></h6>
                                <h6>PLOT NO. D-16, SECTOR-1, G.NOIDA WEST</h6>
                                <h6><b>Email: </b>alpineinfraprojects@gmail.com</h6>
                                <h6><b>Web: </b>www.aigroyal.in</h6>
                                <h6><b>State: </b>Uttar Pradesh</h6>
                                <h6><b>State Code: </b>09</h6>
                            </div>
                        </Grid>
                        <StatementSubject value={unit_no} value2={tower} value3='Reminder' />
                        <Grid item xs={12}>
                            <div >
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
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataDemand2.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.description}</td>
                                                <td>{res.due_date}</td>
                                                <td>{res.net_bsp}</td>
                                                <td>{res.cgst}</td>
                                                <td>{res.sgst}</td>
                                                <td>{res.gst}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.recieved}</td>
                                                <td>{res.pending_amount}</td>
                                            </tr>
                                        )}
                                        {currentTableDataDemand.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.description}</td>
                                                <td>{res.due_date}</td>
                                                <td>{res.net_bsp}</td>
                                                <td>{res.cgst}</td>
                                                <td>{res.sgst}</td>
                                                <td>{res.gst}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.recieved}</td>
                                                <td>{res.pending_amount}</td>
                                            </tr>
                                        )}
                                        {currentTableDataDemand3.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>{res.description}</b></td>
                                                <td>{res.due_date}</td>
                                                <td className="Postform"><b>₹{res.net_bsp}</b></td>
                                                <td className="Postform"><b>₹{res.cgst}</b></td>
                                                <td className="Postform"><b>₹{res.sgst}</b></td>
                                                <td className="Postform"><b>₹{res.gst}</b></td>
                                                <td className="Postform"><b>₹{res.net_due}</b></td>
                                                <td className="Postform"><b>₹{res.recieved}</b></td>
                                                <td className="Postform"><b>₹{res.pending_amount}</b></td>
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
                        </Grid>
                        <DemandStatement value={id} value2='Reminder' />
                    </Grid>
                </div>
            </React.Fragment>
        );
    } else {
        return (

            <React.Fragment>
                <button type="button" onClick={handleDownloadPdf}>
                    Download as PDF
                </button>
                <div ref={printRef} className='Demand'>
                    <Grid container spacing={3} className='Postform'>
                        <Grid item xs={12}>
                            <h6 className="mt-3 text-dark"><b><u><center>Reminder Letter</center></u></b></h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ApplicantDetails value={unit_no} value2={tower} value3='Reminder' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="Postform">
                                <h6 className="Postform"><b>Dated: </b>{date}</h6>
                                <br></br>
                                <h6 className="Postform"><b>ALPINE INFRA PROJECTS PVT LTD</b></h6>
                                <h6 className="Postform">PLOT NO. D-16, SECTOR-1, G.NOIDA WEST</h6>
                                <h6 className="Postform"><b>Email: </b>alpineinfraprojects@gmail.com</h6>
                                <h6 className="Postform"><b>Web: </b>www.aigroyal.in</h6>
                                <h6 className="Postform"><b>State: </b>Uttar Pradesh</h6>
                                <h6 className="Postform"><b>State Code: </b>09</h6>
                            </div>
                        </Grid>
                        <StatementSubject value={unit_no} value2={tower} />
                        <Grid item xs={12}>
                            <div >
                                <table className="table-bordered text-black">
                                    <thead>
                                        <tr style={{ backgroundColor: "#0078AA" }}>
                                            <th className="table">Perticulars</th>
                                            <th className="table">Due Date</th>
                                            <th className="table">Net BSP</th>
                                            <th className="table">Due Amount</th>
                                            <th className="table">Received Amount</th>
                                            <th className="table">Receivable Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table">
                                        {currentTableDataDemand2.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.description}</td>
                                                <td>{res.due_date}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.recieved}</td>
                                                <td>{res.pending_amount}</td>
                                            </tr>
                                        )}
                                        {currentTableDataDemand.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td>{res.description}</td>
                                                <td>{res.due_date}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.net_due}</td>
                                                <td>{res.recieved}</td>
                                                <td>{res.pending_amount}</td>
                                            </tr>
                                        )}
                                        {currentTableDataDemand3.map((res) =>
                                            <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                <td className="Postform"><b>{res.description}</b></td>
                                                <td>{res.due_date}</td>
                                                <td className="Postform"><b>₹{res.net_due}</b></td>
                                                <td className="Postform"><b>₹{res.net_due}</b></td>
                                                <td className="Postform"><b>₹{res.recieved}</b></td>
                                                <td className="Postform"><b>₹{res.pending_amount}</b></td>
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
                        </Grid>
                        <DemandStatement value={id} value2='Reminder' />
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default ReminderTable