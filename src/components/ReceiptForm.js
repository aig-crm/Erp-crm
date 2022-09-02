import Axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function ReceiptForm() {

    const location = useLocation();
    const { unit_no } = location.state;

    const [paymode, setpaymode] = useState("");
    const [date, setdate] = useState("");
    const [bn, setbn] = useState("");
    const [rwgst, setrwgst] = useState("");
    const [rgst, setrgst] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for unit - " + (unit_no));
        Axios.post("https://8703-103-163-108-118.in.ngrok.io/api/" + (unit_no) + "/customer_account", {
            unit_no: (unit_no),
            payment_mode: paymode,
            date: date,
            bank_name: bn,
            rwgst: rwgst,
            rgst: rgst,
            receipt_no: "[" + (unit_no) + "]" + "[" + rwgst + "]" + "[" + rgst + "]"
        }).then((response) => {
            console.log(response);
        });

    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>ADD RECEIPT FOR UNIT - {unit_no}</b></h2>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>unit no: {unit_no}</b></label>
                    <label className="Postform"><b>payment mode:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setpaymode(e.target.value) }
                        }} required />
                    <label className="Postform"><b>date:</b></label>
                    <input
                        type="date"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setdate(e.target.value) }
                        }} required />
                    <label className="Postform"><b>bank name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setbn(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Amt. received with gst:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setrwgst(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Received gst amt:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setrgst(e.target.value) }
                        }} required />
                </div>
                <NavBtn onClick={register}>
                    <NavBtnLink to='/'><b>Submit</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default ReceiptForm;