import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';
import { Link, useLocation } from "react-router-dom";
import Api from "./Api";
import PageTemplate from "./pageTemplate";
import { PDFExport } from '@progress/kendo-react-pdf';

function Table() {

    const pdfExportComponent = React.useRef();

    const location = useLocation();
    const { tower } = location.state;

    const [result, setResult] = useState([]);
    const count_unit = [];
    const arr_rate = [];
    const arr_nbp = [];
    const arr_gst = [];
    const arr_rwgst = [];
    const arr_rwogst = [];
    const arr_balance = [];

    const fileName = () => {
        if (tower != null) {
            return (tower) + '-tower all bookings.pdf';
        } else {
            return 'all bookings.pdf';
        }
    }

    function sumArray(array) {
        let sum = 0;

        array.forEach(item => {
            sum += item;
        });

        console.log(sum);
        return sum;
    }

    function countArray(array) {
        let count = 0;

        for (var i = 0; i < array.length; ++i) {
            count++;
        }

        console.log(count);
        return count;
    }

    const getData = () => {

        if (tower != null) {
            return Api.get('/main/' + "'" + (tower) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/main/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (

        <React.Fragment>
            <div>
                <div >
                    <PDFExport pageTemplate={PageTemplate} fileName={fileName()}
                        paperSize="A1"
                        landscape='true'
                        ref={pdfExportComponent}>
                        <h3 className="mt-3 text-dark"><b><u><center>Booked {tower} tower units sheet</center></u></b></h3>

                        <CSVLink data={result} filename="Tower Data" className="btn btn-success mb-3" style={{ color: "#000" }}>
                            Export {tower} Tower Data
                        </CSVLink>

                        <table className="table-bordered text-black">
                            <thead>
                                <tr style={{ backgroundColor: "#0078AA" }} className="table2">
                                    <th><b>Tower</b></th>
                                    <th><b>Booking Date</b></th>
                                    <th><b>Unit No.</b></th>
                                    <th><b>Area Sq. Ft.</b></th>
                                    <th><b>Applicant Name</b></th>
                                    <th><b>Applicant Mobile No.</b></th>
                                    <th><b>Applicant Email No.</b></th>
                                    <th><b>Co-Applicant Name</b></th>
                                    <th><b>Co-Applicant Mobile No.</b></th>
                                    <th><b>Co-Applicant Email No.</b></th>
                                    <th><b>Broker</b></th>
                                    <th><b>Plan</b></th>
                                    <th><b>Loan</b></th>
                                    <th><b>Rate</b></th>
                                    <th><b>Net Basic Price</b></th>
                                    <th><b>Gst</b></th>
                                    <th><b>Total Basic Cost</b></th>
                                    <th><b>Received with Gst</b></th>
                                    <th><b>Received Gst</b></th>
                                    <th><b>Received without Gst</b></th>
                                    <th><b>Received Percentage</b></th>
                                    <th><b>Balance</b></th>
                                </tr>
                            </thead>
                            <tbody className="table2">
                                {result.map((res) => {
                                    count_unit.push(res.unit_no);
                                    arr_rate.push(res.rate);
                                    arr_nbp.push(res.nbp);
                                    arr_gst.push(res.gst);
                                    arr_rwgst.push(res.rwgst);
                                    arr_rwogst.push(res.rwogst);
                                    arr_balance.push(res.balance)
                                    return (
                                        <tr className="table2" style={{ backgroundColor: "#FFFDD0" }}>
                                            <td>{res.tower}</td>
                                            <td>{res.booking_date}</td>
                                            <Link to='/unit' state={{ from: (res.unit_no), tower: (res.tower), gst_choice: (res.gst_choice) }}>{res.unit_no}</Link>
                                            <td>{res.area_sqft}</td>
                                            <td>{res.applicant_name}</td>
                                            <td>{res.applicant_mob_no}</td>
                                            <td>{res.applicant_email}</td>
                                            <td>{res.coapplicant_name}</td>
                                            <td>{res.coapplicant_mob_no}</td>
                                            <td>{res.coapplicant_email}</td>
                                            <td>{res.broker}</td>
                                            <td>{res.plan}</td>
                                            <td>{res.loan}</td>
                                            <td>{res.rate}</td>
                                            <td>{res.nbp}</td>
                                            <td>{res.gst}</td>
                                            <td>{res.tbc}</td>
                                            <td>{res.rwgst}</td>
                                            <td>{res.rgst}</td>
                                            <td>{res.rwogst}</td>
                                            <td>{res.rec_per}</td>
                                            <td>{res.balance}</td>
                                        </tr>)
                                }
                                )}
                                {
                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                        <td>TOTAL</td>
                                        <td></td>
                                        <td>{countArray(count_unit)}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Rs.<br />{sumArray(arr_rate)}</td>
                                        <td>Rs.<br />{sumArray(arr_nbp)}</td>
                                        <td>Rs.<br />{sumArray(arr_gst)}</td>
                                        <td>Rs.<br />{sumArray(arr_nbp) + sumArray(arr_gst)}</td>
                                        <td>Rs.<br />{sumArray(arr_rwgst)}</td>
                                        <td>Rs.<br />{sumArray(arr_rwgst) - sumArray(arr_rwogst)}</td>
                                        <td>Rs.<br />{sumArray(arr_rwogst)}</td>
                                        <td></td>
                                        <td>Rs.<br />{sumArray(arr_balance)}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </PDFExport>
                </div>
                <button
                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                    onClick={() => {
                        if (pdfExportComponent.current) {
                            pdfExportComponent.current.save();
                        }
                    }}
                ><b><u>Export PDF</u></b>
                </button>
            </div>
        </React.Fragment>
    );
}

export default Table