import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';
import { Link } from "react-router-dom";
import Api from "./Api";
import PageTemplate from "./pageTemplate";
import { PDFExport } from '@progress/kendo-react-pdf';

function Brokers() {

    const pdfExportComponent = React.useRef();

    const [result, setResult] = useState([]);
    const sum_unit = [];
    const count_broker = [];

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
        return Api.get('/broker').then(result => {
            const res = result.data;
            return setResult(res);
        })
    }

    useEffect(() => {
        getData()
    }, []);

    return (

        <React.Fragment>
            <div>
                <div >
                    <PDFExport pageTemplate={PageTemplate} fileName='brokers.pdf'
                        paperSize="A2"
                        landscape='true'
                        ref={pdfExportComponent}>
                        <h3 className="mt-3 text-dark"><b><u><center>Brokers for booked units sheet</center></u></b></h3>

                        <CSVLink data={result} filename="Brokers" className="btn btn-success mb-3" style={{ color: "#000" }}>
                            Export Brokers Report
                        </CSVLink>

                        <table className="table-bordered text-black">
                            <thead>
                                <tr style={{ backgroundColor: "#0078AA" }}>
                                    <th className="table"><b>Broker Company Name</b></th>
                                    <th className="table"><b>Broker Code</b></th>
                                    <th className="table"><b>Bank Name</b></th>
                                    <th className="table"><b>Broker Name</b></th>
                                    <th className="table"><b>Date Of Birth</b></th>
                                    <th className="table"><b>Service Tax No.</b></th>
                                    <th className="table"><b>Gstin</b></th>
                                    <th className="table"><b>Gst State</b></th>
                                    <th className="table"><b>Effective Date</b></th>
                                    <th className="table"><b>Rera No.</b></th>
                                    <th className="table"><b>Pan No.</b></th>
                                    <th className="table"><b>Tan No.</b></th>
                                    <th className="table"><b>License No.</b></th>
                                    <th className="table"><b>STD Code</b></th>
                                    <th className="table"><b>Phone No.</b></th>
                                    <th className="table"><b>Mobile No.</b></th>
                                    <th className="table"><b>Email</b></th>
                                    <th className="table"><b>Address</b></th>
                                    <th className="table"><b>No. Of Units</b></th>
                                </tr>
                            </thead>
                            <tbody className="table">
                                {result.map((res) => {
                                    sum_unit.push(res.unit_cnt);
                                    count_broker.push(res.bcn);
                                    return (
                                        <tr className="table" style={{ backgroundColor: "#FFFDD0" }}>
                                            <td>{res.bcn}</td>
                                            <Link to='/brokerReport' state={{ bcn: (res.bcn) }}>{res.broker_code}</Link>
                                            <td>{res.bank_name}</td>
                                            <td>{res.name}</td>
                                            <td>{res.dob}</td>
                                            <td>{res.sevice_tax_no}</td>
                                            <td>{res.gstin}</td>
                                            <td>{res.gst_state}</td>
                                            <td>{res.eff_date}</td>
                                            <td>{res.rera_no}</td>
                                            <td>{res.pan_no}</td>
                                            <td>{res.tan_no}</td>
                                            <td>{res.licence_no}</td>
                                            <td>{res.std_code}</td>
                                            <td>{res.phone_no}</td>
                                            <td>{res.mob_no}</td>
                                            <td>{res.email}</td>
                                            <td>{res.address}</td>
                                            <td>{res.unit_cnt}</td>
                                        </tr>)
                                }
                                )}
                                {
                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                        <td><b>TOTAL</b></td>
                                        <td><b>{countArray(count_broker)}</b></td>
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
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><b>{sumArray(sum_unit)}</b></td>
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

export default Brokers