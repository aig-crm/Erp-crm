import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function ReceiptForm() {

    const location = useLocation();
    const { unit_no } = location.state;
    const { gst_choice } = location.state;

    const [paymode, setpaymode] = useState("");
    const [date, setdate] = useState("");
    const [bn, setbn] = useState("");
    const [bb, setbb] = useState("");
    const [rn, setrn] = useState("");
    const [rwgst, setrwgst] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for unit - " + (unit_no));
        Api.post("/" + (unit_no) + "/customer_account", {
            unit_no: (unit_no),
            payment_mode: paymode,
            date: date,
            bank_name: bn,
            bank_branch: bb,
            ref_no: rn,
            rwgst: rwgst,
            rgst: rwgst * 0.05,
            receipt_no: (unit_no) + "-" + Math.random()
        }).then((response) => {
            console.log(response);
        });

    }

    if (gst_choice === 'Excld GST') {
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
                        <label className="Postform"><b>bank branch:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setbb(e.target.value) }
                            }} required />
                        <label className="Postform"><b>ref no:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setrn(e.target.value) }
                            }} required />
                        <label className="Postform"><b>Amt. received with gst:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setrwgst(e.target.value) }
                            }} required />
                        <label className="Postform"><b>Received gst amt: {rwgst * 0.05}</b></label>
                    </div>
                    <NavBtn onClick={register}>
                        <NavBtnLink to='/' ><b>Submit</b></NavBtnLink>
                    </NavBtn>
                </div>

            </div>


        );
    }
    else {
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
                        <label className="Postform"><b>bank branch:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setbb(e.target.value) }
                            }} required />
                        <label className="Postform"><b>ref no:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setrn(e.target.value) }
                            }} required />
                        <label className="Postform"><b>Amt. received with gst:</b></label>
                        <input
                            type="text"
                            onChange={(e) => {
                                if (e.target.value === '' || e.target.value === null) {
                                    alert("Form has errors for unit - " + (unit_no));
                                } else { setrwgst(e.target.value) }
                            }} required />
                    </div>
                    <NavBtn onClick={register}>
                        <NavBtnLink to='/' ><b>Submit</b></NavBtnLink>
                    </NavBtn>
                </div>

            </div>


        );
    }
}

export default ReceiptForm;