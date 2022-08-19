import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import { Link } from "react-router-dom";
import Api from "./Api";

function Table(props) {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

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
        getData()
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result, currentPage]);



    return (

        <React.Fragment>
            <div className="row">
                <div>
                    <h3 className="mt-3 text-dark"><b><u><center>Booked {props.value} tower units sheet</center></u></b></h3>

                    <CSVLink data={result} filename="Tower Data" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {props.value} Tower Data
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table"><b>Tower</b></th>
                                <th className="table"><b>Booking Date</b></th>
                                <th className="table"><b>Unit No.</b></th>
                                <th className="table"><b>Area Sq. Ft.</b></th>
                                <th className="table"><b>Applicant Name</b></th>
                                <th className="table"><b>Applicant Mobile No.</b></th>
                                <th className="table"><b>Applicant Email No.</b></th>
                                <th className="table"><b>Co-Applicant Name</b></th>
                                <th className="table"><b>Co-Applicant Mobile No.</b></th>
                                <th className="table"><b>Co-Applicant Email No.</b></th>
                                <th className="table"><b>Broker</b></th>
                                <th className="table"><b>Plan</b></th>
                                <th className="table"><b>Loan</b></th>
                                <th className="table"><b>Rate</b></th>
                                <th className="table"><b>Net Basic Price</b></th>
                                <th className="table"><b>Gst</b></th>
                                <th className="table"><b>Total Basic Cost</b></th>
                                <th className="table"><b>Received with Gst</b></th>
                                <th className="table"><b>Received Gst</b></th>
                                <th className="table"><b>Received without Gst</b></th>
                                <th className="table"><b>Received Percentage</b></th>
                                <th className="table"><b>Balance</b></th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>

                                <tr className="table" style={{ backgroundColor: "#FFFDD0" }}>
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
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={result.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Table