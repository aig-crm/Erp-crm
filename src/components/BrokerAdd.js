import React, { useState } from "react";
import AsyncSelect from 'react-select/async';
import Api from "./Api";
import api from './Api';
import { NavBtn, NavBtnLink } from "./NavbarElements";

function BrokerAdd(props) {

    const [broker_code, setbroker_code] = useState("");
    const [bcn, setbcn] = useState("");
    const [bank_name, setbank_name] = useState("");
    const [name, setname] = useState("");
    const [dob, setdob] = useState("");
    const [sevice_tax_no, setsevice_tax_no] = useState("");
    const [gstin, setgstin] = useState("");
    const [gst_state, setgst_state] = useState("");
    const [eff_date, seteff_date] = useState("");
    const [rera_no, setrera_no] = useState("");
    const [pan_no, setpan_no] = useState("");
    const [tan_no, settan_no] = useState("");
    const [licence_no, setlicence_no] = useState("");
    const [std_code, setstd_code] = useState("");
    const [phone_no, setphone_no] = useState("");
    const [mob_no, setmob_no] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for broker");
        Api.post("/addBroker", {
            broker_code: broker_code,
            sevice_tax_no: sevice_tax_no,
            gst_state: gst_state,
            eff_date: eff_date,
            gstin: gstin,
            name: name,
            dob: dob,
            bcn: bcn,
            bank_name: bank_name,
            rera_no: rera_no,
            pan_no: pan_no,
            tan_no: tan_no,
            licence_no: licence_no,
            std_code: std_code,
            phone_no: phone_no,
            mob_no: mob_no,
            email: email,
            address: address
        }).then((response) => {
            console.log(response);
        });

    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>BROKER FORM</b></h2>
                <h6 className="mt-3 text-dark"><b><u>Broker Information</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>broker company name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors");
                            } else { setbcn(e.target.value) }
                        }} required />
                    <label className="Postform"><b>broker code:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors");
                            } else { setbroker_code(e.target.value) }
                        }} required />
                    <label className="Postform"><b>name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors");
                            } else { setname(e.target.value) }
                        }} required />
                    <label className="Postform"><b>date of birth:</b></label>
                    <input
                        type="date"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setdob("");
                            } else { setdob(e.target.value) }
                        }} required />
                </div>
                <h6 className="mt-3 text-dark"><b><u>Government Tax Information</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>Gstin:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setgstin("Unregistered");
                            } else { setgstin(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Gst State:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setgst_state("Unregistered");
                            } else { setgst_state(e.target.value) }
                        }} required />
                    <label className="Postform"><b>effective date:</b></label>
                    <input
                        type="date"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                seteff_date("");
                            } else { seteff_date(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Rera No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setrera_no("");
                            } else { setrera_no(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Pan No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setpan_no("");
                            } else { setpan_no(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Tan No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                settan_no("");
                            } else { settan_no(e.target.value) }
                        }} required />
                    <label className="Postform"><b>service tax no.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setsevice_tax_no("")
                            } else {
                                setsevice_tax_no(e.target.value)
                            }
                        }} required />
                </div>
                <h6 className="mt-3 text-dark"><b><u>Contact Information</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>Address:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setaddress('NA')
                            } else {
                                setaddress(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>Phone No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setstd_code('')
                            } else {
                                setstd_code(e.target.value)
                            }
                        }} required />-
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setphone_no('')
                            } else {
                                setphone_no(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>Mobile No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setmob_no('')
                            } else {
                                setmob_no(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>Email:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setemail('')
                            } else {
                                setemail(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>License No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setlicence_no('')
                            } else {
                                setlicence_no(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>Bank name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setbank_name('')
                            } else {
                                setbank_name(e.target.value)
                            }
                        }} required />
                </div>
                <NavBtn onClick={register}>
                    <NavBtnLink to='/'><b>Submit</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default BrokerAdd;