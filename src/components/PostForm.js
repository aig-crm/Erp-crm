import React, { useState } from "react";
import AsyncSelect from 'react-select/async';
import Api from "./Api";
import api from './Api';
import { NavBtn, NavBtnLink } from "./NavbarElements";

function PostForm(props) {

    const [bd, setbd] = useState("");
    const [l, setl] = useState("");
    const [nbp, setnbp] = useState("");
    const [tbp, settbp] = useState("");
    const [bt, setbt] = useState("");
    const [an, setan] = useState("");
    const [amn, setamn] = useState("");
    const [ae, setae] = useState("");
    const [can, setcan] = useState("");
    const [camn, setcamn] = useState("");
    const [cae, setcae] = useState("");
    const [floor, setfloor] = useState("");
    const [address, setaddress] = useState("");
    const [acard, setacard] = useState("");
    const [pcard, setpcard] = useState("");

    const [inputValue1, setValue1] = useState("");
    const [selectedValue1, setSelectedValue1] = useState(null);
    const [inputValue2, setValue2] = useState("");
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [inputValue3, setValue3] = useState("");
    const [selectedValue3, setSelectedValue3] = useState(null);
    const [inputValue4, setValue4] = useState('');
    const [selectedValue4, setSelectedValue4] = useState(null);
    const [inputValue5, setValue5] = useState('');
    const [selectedValue5, setSelectedValue5] = useState(null);

    // handle input change event
    const handleInputChange1 = value => {
        setValue1(value);
    };
    // handle selection
    const handleChange1 = value => {
        setSelectedValue1(value);
        console.log('value', value);
    }
    const fetchData1 = () => {
        return api.get('/bookingApi/unit_no/' + "'" + (props.value) + "'").then(result => {
            const res = result.data;
            return res;
        });
    }

    // handle input change event
    const handleInputChange2 = value => {
        setValue2(value);
    };
    // handle selection
    const handleChange2 = value => {
        setSelectedValue2(value);
    }
    const fetchData2 = () => {
        return api.get('/bookingApi/area_sqft/' + "'" + (props.value) + "'").then(result => {
            const res = result.data;
            return res;
        });
    }

    // handle input change event
    const handleInputChange3 = value => {
        setValue3(value);
    };
    // handle selection
    const handleChange3 = value => {
        setSelectedValue3(value);
    }
    const fetchData3 = () => {
        return api.get('/bookingApi/payment_plan').then(result => {
            const res = result.data;
            return res;
        });
    }

    // handle input change event
    const handleInputChange4 = value => {
        setValue4(value);
    };
    // handle selection
    const handleChange4 = value => {
        setSelectedValue4(value);
    }
    const fetchData4 = () => {
        return api.get('/bookingApi/broker').then(result => {
            const res = result.data;
            return res;
        });
    }

    // handle input change event
    const handleInputChange5 = value => {
        setValue5(value);
    };
    // handle selection
    const handleChange5 = value => {
        setSelectedValue5(value);
    }
    const fetchData5 = () => {
        return api.get('/gst_choice').then(result => {
            const res = result.data;
            return res;
        });
    }

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for tower - " + (props.value));
        Api.post("/customer", {
            booking_date: bd,
            tower: (props.value),
            broker: JSON.stringify(selectedValue4),
            gst_choice: JSON.stringify(selectedValue5),
            unit_no: JSON.stringify(selectedValue1),
            floor: floor,
            aadhar_card: acard,
            pan_card: pcard,
            address: address,
            area_sqft: JSON.stringify(selectedValue2),
            plan: JSON.stringify(selectedValue3),
            applicant_name: an,
            applicant_mob_no: amn,
            applicant_email: ae,
            coapplicant_name: can,
            coapplicant_mob_no: camn,
            coapplicant_email: cae,
            loan: l,
            nbp: nbp,
            tbc: tbp,
            basement: bt
        }).then((response) => {
            console.log(response);
        });

    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>BOOKING FORM {props.value}</b></h2>
                <h6 className="mt-3 text-dark"><b><u>Flat details</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>booking date:</b></label>
                    <input
                        type="date"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setbd(e.target.value) }
                        }} required />
                    <label className="Postform"><b>tower: {props.value}</b></label>
                    <label className="Postform"><b>floor:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setfloor(e.target.value) }
                        }} required />

                    <div className="mt-3 text-dark">
                        <div className="row">
                            <div className="col-md-4">
                                <label className="Postform"><b>unit no:</b></label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    value={selectedValue1}
                                    getOptionLabel={e => e.unit_no}
                                    getOptionValue={e => e.unit_no}
                                    loadOptions={fetchData1}
                                    on InputChange={handleInputChange1}
                                    onChange={handleChange1}
                                    required />
                            </div>
                            <div className="col-md-4">
                                <label className="Postform"><b>unit type:</b></label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    value={selectedValue2}
                                    getOptionLabel={e => e.area_sqft}
                                    getOptionValue={e => e.area_sqft}
                                    loadOptions={fetchData2}
                                    on InputChange={handleInputChange2}
                                    onChange={handleChange2}
                                    required />
                            </div>
                            <div className="col-md-4">
                                <label className="Postform"><b>payment plan:</b></label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    value={selectedValue3}
                                    getOptionLabel={e => e.plan}
                                    getOptionValue={e => e.plan}
                                    loadOptions={fetchData3}
                                    on InputChange={handleInputChange3}
                                    onChange={handleChange3}
                                    required />
                            </div>
                            <div className="col-md-4">
                                <label className="Postform"><b>broker:</b></label>
                                <AsyncSelect
                                    cacheOptions
                                    className="col-md-4"
                                    defaultOptions
                                    value={selectedValue4}
                                    getOptionLabel={e => e.bcn}
                                    getOptionValue={e => e.bcn}
                                    loadOptions={fetchData4}
                                    on InputChange={handleInputChange4}
                                    onChange={handleChange4}
                                    required />
                            </div>
                            <div className="col-md-4">
                                <label className="Postform"><b>w/o GST:</b></label>
                                <AsyncSelect
                                    cacheOptions
                                    className="col-md-4"
                                    defaultOptions
                                    value={selectedValue5}
                                    getOptionLabel={e => e.gst_choice}
                                    getOptionValue={e => e.gst_choice}
                                    loadOptions={fetchData5}
                                    on InputChange={handleInputChange5}
                                    onChange={handleChange5}
                                    required />
                            </div>
                        </div>
                    </div>

                    <label className="Postform"><b>loan:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setl("");
                            } else { setl(e.target.value) }
                        }} required />
                    <label className="Postform"><b>net base price:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setnbp(e.target.value) }
                        }} required />
                    <label className="Postform"><b>total base price:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { settbp(e.target.value) }
                        }} required />
                    <label className="Postform"><b>basement:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setbt('NA');
                            } else { setbt(e.target.value) }
                        }} required />
                </div>
                <h6 className="mt-3 text-dark"><b><u>Applicant details</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>applicant name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setan(e.target.value) }
                        }} required />
                    <label className="Postform"><b>applicant mobile no:</b></label>
                    <input
                        type="phone"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setamn(e.target.value) }
                        }} required />
                    <label className="Postform"><b>applicant email:</b></label>
                    <input
                        type="email"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setae("");
                            } else { setae(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Aadhaar card No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setacard(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Pan card No.</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for tower - " + (props.value));
                            } else { setpcard(e.target.value) }
                        }} required />
                    <label className="Postform"><b>address:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setaddress('NA');
                            } else { setaddress(e.target.value) }
                        }} required />
                </div>
                <h6 className="mt-3 text-dark"><b><u>Co-applicant details</u></b></h6>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>coapplicant name:</b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setcan('NA')
                            } else {
                                setcan(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>coapplicant mobile no:</b></label>
                    <input
                        type="phone"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setcamn('NA')
                            } else {
                                setcamn(e.target.value)
                            }
                        }} required />
                    <label className="Postform"><b>coapplicant email:</b></label>
                    <input
                        type="email"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                setcae('')
                            } else {
                                setcae(e.target.value)
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

export default PostForm;