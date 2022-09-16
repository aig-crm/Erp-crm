import React, { useState, useEffect } from "react";
import Api from "./Api";
import PageTemplate from "./pageTemplate";
import { PDFExport } from '@progress/kendo-react-pdf';

function CanceledBookings(props) {

    const pdfExportComponent = React.useRef();

    const [result, setResult] = useState([]);

    const fileName = () => {
        if (props.value != null) {
            return (props.value) + '-tower all canceled bookings.pdf';
        } else {
            return 'all canceled bookings.pdf';
        }
    }

    const getData = () => {

        if (props.value != null) {
            return Api.get('/cbookings/' + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/cbookings/').then(result => {
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
                        <h3 className="mt-3 text-dark"><b><u><center>Cancelled {props.value} tower units sheet</center></u></b></h3>

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
                                    <th className="table"><b>Net Basic Price</b></th>
                                    <th className="table"><b>Total Basic Cost</b></th>
                                    <th className="table"><b>Refunded Amount</b></th>
                                    <th className="table"><b>Remarks</b></th>
                                </tr>
                            </thead>
                            <tbody className="table">
                                {result.map((res) =>
                                    <tr className="table" style={{ backgroundColor: "#FFFDD0" }}>
                                        <td>{res.tower}</td>
                                        <td>{res.booking_date}</td>
                                        <td>{res.unit_no}</td>
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
                                        <td>{res.nbp}</td>
                                        <td>{res.tbc}</td>
                                        <td>{res.amt}</td>
                                        <td>{res.remarks}</td>
                                    </tr>)
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

export default CanceledBookings