import React, { useState, useEffect } from "react";
import Api from "./Api";
import PageTemplate from "./pageTemplate";
import { PDFExport } from '@progress/kendo-react-pdf';
import { NavBtn, NavLink } from "./NavbarElements";

function CancelBookings(props) {

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

    return (

        <React.Fragment>
            <div>
                <div >
                        <h3 className="mt-3 text-dark"><b><u><center>Booked {props.value} tower units sheet</center></u></b></h3>

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
                                    <th className="table"><b>Cancel</b></th>
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
                                        <td>{res.rate}</td>
                                        <td>{res.nbp}</td>
                                        <td>{res.gst}</td>
                                        <td>{res.tbc}</td>
                                        <td>
                                            <NavBtn >
                                                <NavLink to='/deleteBooking' state={{ tower: (res.tower), booking_date: (res.booking_date), unit_no: (res.unit_no), area_sqft: (res.area_sqft), applicant_name: (res.applicant_name), applicant_mob_no: (res.applicant_mob_no), applicant_email: (res.applicant_email), coapplicant_name: (res.coapplicant_name), coapplicant_mob_no: (res.coapplicant_mob_no), coapplicant_email: (res.coapplicant_email), broker: (res.broker), plan: (res.plan), loan: (res.loan), rate: (res.rate), nbp: (res.nbp), gst: (res.gst), tbc: (res.tbc) }}><b>
                                                    Cancel</b>
                                                </NavLink>
                                            </NavBtn></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CancelBookings