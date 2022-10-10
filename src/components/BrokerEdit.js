import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';
import { useLocation } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { NavBtn, NavBtnLink } from './NavbarElements';

function BrokerEdit() {

    const [result, setResult] = useState([]);

    const location = useLocation();
    const { bcn } = location.state;

    const [new_broker_code, setnew_broker_code] = useState("");
    const [new_bcn, setnew_bcn] = useState("");
    const [new_bank_name, setnew_bank_name] = useState("");
    const [new_name, setnew_name] = useState("");
    const [new_dob, setnew_dob] = useState("");
    const [new_sevice_tax_no, setnew_sevice_tax_no] = useState("");
    const [new_gstin, setnew_gstin] = useState("");
    const [new_gst_state, setnew_gst_state] = useState("");
    const [new_eff_date, setnew_eff_date] = useState("");
    const [new_rera_no, setnew_rera_no] = useState("");
    const [new_pan_no, setnew_pan_no] = useState("");
    const [new_tan_no, setnew_tan_no] = useState("");
    const [new_licence_no, setnew_licence_no] = useState("");
    const [new_std_code, setnew_std_code] = useState("");
    const [new_phone_no, setnew_phone_no] = useState("");
    const [new_mob_no, setnew_mob_no] = useState("");
    const [new_email, setnew_email] = useState("");
    const [new_address, setnew_address] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for broker");
        Api.put('/editBroker/' + "'" + (bcn) + "'", {
            broker_code: new_broker_code,
            sevice_tax_no: new_sevice_tax_no,
            gst_state: new_gst_state,
            eff_date: new_eff_date,
            gstin: new_gstin,
            name: new_name,
            dob: new_dob,
            bcn: new_bcn,
            bank_name: new_bank_name,
            rera_no: new_rera_no,
            pan_no: new_pan_no,
            tan_no: new_tan_no,
            licence_no: new_licence_no,
            std_code: new_std_code,
            phone_no: new_phone_no,
            mob_no: new_mob_no,
            email: new_email,
            address: new_address
        }).then((response) => {
            console.log(response);
        });

    }

    const getData = () => {

        if (bcn != null) {
            return Api.get('/brokerDetails/' + "'" + (bcn) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/brokerDetails/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            {result.map((res) =>

                <div className="Postform">
                    <Paper >
                        <div className="applicant">
                            <div className='row'>
                                <div className='col'>
                                    <h6 className="Postform"><b>Broker Company Name - </b></h6>
                                    <input
                                        defaultValue={bcn}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_bcn(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Broker Code - </b></h6>
                                    <input
                                        defaultValue={res.broker_code}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_broker_code(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Bank Name - </b></h6>
                                    <input
                                        defaultValue={res.bank_name}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_bank_name(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Broker Name - </b></h6>
                                    <input
                                        defaultValue={res.name}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_name(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Date Of Birth - </b></h6>
                                    <input
                                        defaultValue={res.dob}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_dob(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Service Tax No. - </b></h6>
                                    <input
                                        defaultValue={res.sevice_tax_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_sevice_tax_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Gstin - </b></h6>
                                    <input
                                        defaultValue={res.gstin}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_gst_state(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Gst State - </b></h6>
                                    <input
                                        defaultValue={res.gst_state}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_gst_state(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Effective Date - </b></h6>
                                    <input
                                        defaultValue={res.eff_date}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_eff_date(e.target.value) }
                                        }} required />
                                </div>
                                <div className='col'>
                                    <h6 className="Postform"><b>Rera No. - </b></h6>
                                    <input
                                        defaultValue={res.rera_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_rera_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Pan No. - </b></h6>
                                    <input
                                        defaultValue={res.pan_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_pan_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Tan No. - </b></h6>
                                    <input
                                        defaultValue={res.tan_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_tan_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>License No. - </b></h6>
                                    <input
                                        defaultValue={res.licence_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_licence_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>STD Code - </b></h6>
                                    <input
                                        defaultValue={res.std_code}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_std_code(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Phone No. - </b></h6>
                                    <input
                                        defaultValue={res.phone_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_phone_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Mobile No. - </b></h6>
                                    <input
                                        defaultValue={res.mob_no}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_mob_no(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Email - </b></h6>
                                    <input
                                        defaultValue={res.email}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_email(e.target.value) }
                                        }} required />
                                    <h6 className="Postform"><b>Address - </b></h6>
                                    <input
                                        defaultValue={res.address}
                                        type="text"
                                        onChange={(e) => {
                                            if (e.target.value === '' || e.target.value === null) {
                                                alert("Form has errors");
                                            } else { setnew_address(e.target.value) }
                                        }} required />
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            )}
            <NavBtn onClick={register}>
                <NavBtnLink to='/'><b>Submit</b></NavBtnLink>
            </NavBtn>
        </div>
    );
}

export default BrokerEdit;

