import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function DeleteBooking() {

    const location = useLocation();
    const { tower } = location.state;
    const { booking_date } = location.state;
    const { unit_no } = location.state;
    const { area_sqft } = location.state;
    const { applicant_name } = location.state;
    const { applicant_mob_no } = location.state;
    const { applicant_email } = location.state;
    const { coapplicant_name } = location.state;
    const { coapplicant_mob_no } = location.state;
    const { coapplicant_email } = location.state;
    const { broker } = location.state;
    const { plan } = location.state;
    const { loan } = location.state;
    const { rate } = location.state;
    const { nbp } = location.state;
    const { gst } = location.state;
    const { tbc } = location.state;

    const [amt, setamt] = useState("");
    const [remarks, setremarks] = useState("");

    async function register() {
        alert("Form submitted for unit - " + (unit_no));

        await Api.post("/cancel_booking/" + "'" + (unit_no) + "'", {
            booking_date: booking_date,
            tower: tower,
            broker: broker,
            unit_no: unit_no,
            area_sqft: area_sqft,
            plan: plan,
            applicant_name: applicant_name,
            applicant_mob_no: applicant_mob_no,
            applicant_email: applicant_email,
            coapplicant_name: coapplicant_name,
            coapplicant_mob_no: coapplicant_mob_no,
            coapplicant_email: coapplicant_email,
            loan: loan,
            nbp: nbp,
            tbc: tbc,
            rate: rate,
            gst: gst,
            amt: amt,
            remarks: remarks
        }).then((response) => {
            console.log(response);
        });

        await Api.delete("/booking_delete/" + "'" + (unit_no) + "'")
            .then(() => this.setState({ status: 'Delete successful' }))
            .catch(error => {
                console.error('There was an error!', error);
            });

        await Api.delete("/cpp_delete/" + "'" + (unit_no) + "'")
            .then(() => this.setState({ status: 'Delete successful' }))
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>DELETE BOOKING FOR UNIT - {unit_no}</b></h2>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b><u>Booking Date:</u> {booking_date}</b></label>
                    <label className="Postform"><b><u>Tower:</u> {tower}</b></label>
                    <label className="Postform"><b><u>Broker:</u> {broker}</b></label>
                    <label className="Postform"><b><u>Unit no:</u> {unit_no}</b></label>
                    <label className="Postform"><b><u>Area Sq Ft:</u> {area_sqft}</b></label>
                    <label className="Postform"><b><u>Payment Plan:</u> {plan}</b></label>
                    <label className="Postform"><b><u>Applicant Name:</u> {applicant_name}</b></label>
                    <label className="Postform"><b><u>Applicant Mobile no:</u> {applicant_mob_no}</b></label>
                    <label className="Postform"><b><u>Applicant Email:</u> {applicant_email}</b></label>
                    <label className="Postform"><b><u>Co-Applicant Name:</u> {coapplicant_name}</b></label>
                    <label className="Postform"><b><u>Co-Applicant Mobile no:</u> {coapplicant_mob_no}</b></label>
                    <label className="Postform"><b><u>Co-Applicant  Email:</u> {coapplicant_email}</b></label>
                    <label className="Postform"><b><u>Loan:</u> {loan}</b></label>
                    <label className="Postform"><b><u>Net Base Price:</u> {nbp}</b></label>
                    <label className="Postform"><b><u>Total Base Price:</u> {tbc}</b></label>
                    <label className="Postform"><b><u>Rate:</u> {rate}</b></label>
                    <label className="Postform"><b><u>Gst:</u> {gst}</b></label>
                    <label className="Postform"><b><u>Refunded Amount*</u></b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (unit_no));
                            } else { setamt(e.target.value) }
                        }} required />
                    <label className="Postform"><b><u>Remarks*</u></b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (unit_no));
                            } else { setremarks(e.target.value) }
                        }} required />
                </div>
                <br />
                <NavBtn onClick={register}>
                    <NavBtnLink to='/'><b>Cancel Booking</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default DeleteBooking;