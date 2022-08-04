import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import { Link } from "react-router-dom";
import Api from "./Api";

function Table(props) {

    let PageSize = 10;

    const [filename, setFilename] = useState("");
    
    if (props.value != null) {
        setFilename((props.value) + "Tower Data");
    } else {
        setFilename("Tower Data");
    }

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
                <div className="col-sm-8">
                    <h3 className="mt-3 text-dark"><b><u><center>Booked {props.value} tower units sheet</center></u></b></h3>

                    <CSVLink data={result} filename={filename} className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {props.value} Tower Data
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Tower</th>
                                <th className="table">Booking Date</th>
                                <th className="table">Unit No.</th>
                                <th className="table">Area Sq. Ft.</th>
                                <th className="table">Applicant Name</th>
                                <th className="table">Applicant Mobile No.</th>
                                <th className="table">Applicant Email No.</th>
                                <th className="table">Co-Applicant Name</th>
                                <th className="table">Co-Applicant Mobile No.</th>
                                <th className="table">Co-Applicant Email No.</th>
                                <th className="table">Broker</th>
                                <th className="table">Plan</th>
                                <th className="table">Loan</th>
                                <th className="table">Rate</th>
                                <th className="table">Net Basic Price</th>
                                <th className="table">Gst</th>
                                <th className="table">Total Basic Cost</th>
                                <th className="table">Till Date Total Due</th>
                                <th className="table">Received with Gst</th>
                                <th className="table">Received Gst</th>
                                <th className="table">Received without Gst</th>
                                <th className="table">Received Percentage</th>
                                <th className="table">Balance</th>
                                <th className="table">Outstandings</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>

                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.tower}</td>
                                    <td>{res.booking_date}</td>
                                    <Link to='/unit' state={{ from: (res.unit_no), tower: (res.tower) }}>{res.unit_no}</Link>
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