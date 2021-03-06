import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';
import { Link } from "react-router-dom";
import Api from "./Api";

function Table(props) {

    const [result, setResult] = useState([]);
    
    const getData = () => {

        if (props.value != null) {
            return Api.get('/main/' + "'" + (props.value) + "'").then(result => {
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
        getData();
    }, [])

    

    return (
        
        <React.Fragment>
            <div className="row">
                <div className="col-sm-8">
                    <h3 className="mt-3 text-dark"><b><u><center>Booked units sheet</center></u></b></h3>

                    <CSVLink data={result} filename="Customers" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export Data
                    </CSVLink>

                    <table className="table table-bordered text-black">
                        <thead>
                            <tr className="Postform">
                                <th style={{ backgroundColor: "#89CFF0" }}>Tower</th>
                                <th style={{ backgroundColor: "#7393B3" }}>Booking Date</th>
                                <th style={{ backgroundColor: "#088F8F" }}>Unit No.</th>
                                <th style={{ backgroundColor: "#0096FF" }}>Area Sq. Ft.</th>
                                <th style={{ backgroundColor: "#5F9EA0" }}>Applicant Name</th>
                                <th style={{ backgroundColor: "#00FFFF" }}>Applicant Mobile No.</th>
                                <th style={{ backgroundColor: "#6F8FAF" }}>Applicant Email No.</th>
                                <th style={{ backgroundColor: "#7DF9FF" }}>Co-Applicant Name</th>
                                <th style={{ backgroundColor: "#6082B6" }}>Co-Applicant Mobile No.</th>
                                <th style={{ backgroundColor: "#ADD8E6" }}>Co-Applicant Email No.</th>
                                <th style={{ backgroundColor: "#A7C7E7" }}>Broker</th>
                                <th style={{ backgroundColor: "#CCCCFF" }}>Plan</th>
                                <th style={{ backgroundColor: "#B6D0E2" }}>Loan</th>
                                <th style={{ backgroundColor: "#96DED1" }}>Rate</th>
                                <th style={{ backgroundColor: "#4169E1" }}>Net Basic Price</th>
                                <th style={{ backgroundColor: "#9FE2BF" }}>Gst</th>
                                <th style={{ backgroundColor: "#87CEEB" }}>Total Basic Cost</th>
                                <th style={{ backgroundColor: "#4682B4" }}>Till Date Total Due</th>
                                <th style={{ backgroundColor: "#008080" }}>Received with Gst</th>
                                <th style={{ backgroundColor: "#40E0D0" }}>Received Gst</th>
                                <th style={{ backgroundColor: "#40B5AD" }}>Received without Gst</th>
                                <th style={{ backgroundColor: "#F0FFFF" }}>Received Percentage</th>
                                <th style={{ backgroundColor: "#6495ED" }}>Balance</th>
                                <th style={{ backgroundColor: "#5D3FD3" }}>Outstandings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((res) =>
                            
                                <tr className="Postform">
                                    <td>{res.tower}</td>
                                    <td>{res.booking_date}</td>
                                    <Link to='/unit' state={{ from: (res.unit_no) }}>{res.unit_no}</Link>
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
                                    <td>{res.tdtd}</td>
                                    <td>{res.rwgst}</td>
                                    <td>{res.rgst}</td>
                                    <td>{res.rwogst}</td>
                                    <td>{res.rec_per}</td>
                                    <td>{res.balance}</td>
                                    <td>{res.o_t}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Table