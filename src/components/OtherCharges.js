import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function OtherCharges() {

    const location = useLocation();
    const { unit_no } = location.state;

    const [parameters1, setparameters1] = useState([]);
    const [basic_cost1, setbasic_cost1] = useState([]);
    const [paid_cost1, setpaid_cost1] = useState([]);
    const [parameters2, setparameters2] = useState([]);
    const [basic_cost2, setbasic_cost2] = useState([]);
    const [paid_cost2, setpaid_cost2] = useState([]);
    const [parameters3, setparameters3] = useState([]);
    const [basic_cost3, setbasic_cost3] = useState([]);
    const [paid_cost3, setpaid_cost3] = useState([]);
    const [parameters4, setparameters4] = useState([]);
    const [basic_cost4, setbasic_cost4] = useState([]);
    const [paid_cost4, setpaid_cost4] = useState([]);
    const [parameters5, setparameters5] = useState([]);
    const [basic_cost5, setbasic_cost5] = useState([]);
    const [paid_cost5, setpaid_cost5] = useState([]);
    const [parameters6, setparameters6] = useState([]);
    const [basic_cost6, setbasic_cost6] = useState([]);
    const [paid_cost6, setpaid_cost6] = useState([]);
    const [parameters7, setparameters7] = useState([]);
    const [basic_cost7, setbasic_cost7] = useState([]);
    const [paid_cost7, setpaid_cost7] = useState([]);
    const [parameters8, setparameters8] = useState([]);
    const [basic_cost8, setbasic_cost8] = useState([]);
    const [paid_cost8, setpaid_cost8] = useState([]);
    const [parameters9, setparameters9] = useState([]);
    const [basic_cost9, setbasic_cost9] = useState([]);
    const [paid_cost9, setpaid_cost9] = useState([]);
    const [parameters10, setparameters10] = useState([]);
    const [basic_cost10, setbasic_cost10] = useState([]);
    const [paid_cost10, setpaid_cost10] = useState([]);

    const register1 = (e) => {
        alert("Form submitted for ONE TIME LEASE RENT");
        Api.post("/other_charges", {
            id: unit_no + "[" + 1 + "]",
            unit_no: unit_no,
            parameters: parameters1,
            basic_cost: basic_cost1,
            paid_cost: paid_cost1
        }).then((response) => {
            console.log(response);
        });
    }
    const register2 = (e) => {
        alert("Form submitted for ELECTRICITY METER CHARGES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 2 + "]",
            unit_no: unit_no,
            parameters: parameters2,
            basic_cost: basic_cost2,
            paid_cost: paid_cost2
        }).then((response) => {
            console.log(response);
        });
    }
    const register3 = (e) => {
        alert("Form submitted for DG POWER BACK-UP ELECTRIC METER CHARGES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 3 + "]",
            unit_no: unit_no,
            parameters: parameters3,
            basic_cost: basic_cost3,
            paid_cost: paid_cost3
        }).then((response) => {
            console.log(response);
        });
    }
    const register4 = (e) => {
        alert("Form submitted for ELECTRICAL INFRASTRUCTURE CHARGES AS PER APPOROVED DRAWING BY RESPECTIVE AUTHORITES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 4 + "]",
            unit_no: unit_no,
            parameters: parameters4,
            basic_cost: basic_cost4,
            paid_cost: paid_cost4
        }).then((response) => {
            console.log(response);
        });
    }
    const register5 = (e) => {
        alert("Form submitted for CHARGES FOR ADDITIONAL PROVISION OF 1 KVA DG POWER BACKUP FACILITY AS PER UPDATED APPROVE DRAWING BY RESPECTIVE AUTHORITES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 5 + "]",
            unit_no: unit_no,
            parameters: parameters5,
            basic_cost: basic_cost5,
            paid_cost: paid_cost5
        }).then((response) => {
            console.log(response);
        });
    }
    const register6 = (e) => {
        alert("Form submitted for WATER & SEWAGE CONNECTION CHARGES ^^");
        Api.post("/other_charges", {
            id: unit_no + "[" + 6 + "]",
            unit_no: unit_no,
            parameters: parameters6,
            basic_cost: basic_cost6,
            paid_cost: paid_cost6
        }).then((response) => {
            console.log(response);
        });
    }
    const register7 = (e) => {
        alert("Form submitted for IGL GAS CONNECTION INFRASTRUCTURE DEVELOPMENT CHARGES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 7 + "]",
            unit_no: unit_no,
            parameters: parameters7,
            basic_cost: basic_cost7,
            paid_cost: paid_cost7
        }).then((response) => {
            console.log(response);
        });
    }
    const register8 = (e) => {
        alert("Form submitted for CLUB USAGE CHARGES FOR 1 YEAR");
        Api.post("/other_charges", {
            id: unit_no + "[" + 8 + "]",
            unit_no: unit_no,
            parameters: parameters8,
            basic_cost: basic_cost8,
            paid_cost: paid_cost8
        }).then((response) => {
            console.log(response);
        });
    }
    const register9 = (e) => {
        alert("Form submitted for INTEREST FREE MAINTENANCE SECURITY (IFMS)");
        Api.post("/other_charges", {
            id: unit_no + "[" + 9 + "]",
            unit_no: unit_no,
            parameters: parameters9,
            basic_cost: basic_cost9,
            paid_cost: paid_cost9
        }).then((response) => {
            console.log(response);
        });
    }
    const register10 = (e) => {
        alert("Form submitted for 2 YEARS ADVANCE MAINTENANCE CHARGES");
        Api.post("/other_charges", {
            id: unit_no + "[" + 10 + "]",
            unit_no: unit_no,
            parameters: parameters10,
            basic_cost: basic_cost10,
            paid_cost: paid_cost10
        }).then((response) => {
            console.log(response);
        });
    }

    return (

        <React.Fragment>
            <div>
                <div >
                    <h3 className="mt-3 text-dark"><b><u><center>Other charges for {unit_no} unit</center></u></b></h3>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">PARAMETERS</th>
                                <th className="table">BASIC COST</th>
                                <th className="table">PAID</th>
                                <th className="table">ADD</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>ONE TIME LEASE RENT</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost1(0);
                                            setparameters1("ONE TIME LEASE RENT");
                                        } else {
                                            setbasic_cost1(e.target.value);
                                            setparameters1("ONE TIME LEASE RENT");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost1(0);
                                        } else { setpaid_cost1(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register1}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>ELECTRICITY METER CHARGES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost2(0);
                                            setparameters2("ELECTRICITY METER CHARGES");
                                        } else {
                                            setbasic_cost2(e.target.value);
                                            setparameters2("ELECTRICITY METER CHARGES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost2(0);
                                        } else { setpaid_cost2(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register2}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>DG POWER BACK-UP ELECTRIC METER CHARGES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost3(0);
                                            setparameters3("DG POWER BACK-UP ELECTRIC METER CHARGES");
                                        } else {
                                            setbasic_cost3(e.target.value);
                                            setparameters3("DG POWER BACK-UP ELECTRIC METER CHARGES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost3(0);
                                        } else { setpaid_cost3(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register3}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>ELECTRICAL INFRASTRUCTURE CHARGES AS PER APPOROVED DRAWING BY RESPECTIVE AUTHORITES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost4(0);
                                            setparameters4("ELECTRICAL INFRASTRUCTURE CHARGES AS PER APPOROVED DRAWING BY RESPECTIVE AUTHORITES");
                                        } else {
                                            setbasic_cost4(e.target.value);
                                            setparameters4("ELECTRICAL INFRASTRUCTURE CHARGES AS PER APPOROVED DRAWING BY RESPECTIVE AUTHORITES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost4(0);
                                        } else { setpaid_cost4(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register4}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>CHARGES FOR ADDITIONAL PROVISION OF 1 KVA DG POWER BACKUP FACILITY AS PER UPDATED APPROVE DRAWING BY RESPECTIVE AUTHORITES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost5(0);
                                            setparameters5("CHARGES FOR ADDITIONAL PROVISION OF 1 KVA DG POWER BACKUP FACILITY AS PER UPDATED APPROVE DRAWING BY RESPECTIVE AUTHORITES");
                                        } else {
                                            setbasic_cost5(e.target.value);
                                            setparameters5("CHARGES FOR ADDITIONAL PROVISION OF 1 KVA DG POWER BACKUP FACILITY AS PER UPDATED APPROVE DRAWING BY RESPECTIVE AUTHORITES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost5(0);
                                        } else { setpaid_cost5(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register5}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>WATER & SEWAGE CONNECTION CHARGES ^^</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost6(0);
                                            setparameters6("WATER & SEWAGE CONNECTION CHARGES ^^");
                                        } else {
                                            setbasic_cost6(e.target.value);
                                            setparameters6("WATER & SEWAGE CONNECTION CHARGES ^^");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost6(0);
                                        } else { setpaid_cost6(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register6}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>IGL GAS CONNECTION INFRASTRUCTURE DEVELOPMENT CHARGES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost7(0);
                                            setparameters7("IGL GAS CONNECTION INFRASTRUCTURE DEVELOPMENT CHARGES");
                                        } else {
                                            setbasic_cost7(e.target.value);
                                            setparameters7("IGL GAS CONNECTION INFRASTRUCTURE DEVELOPMENT CHARGES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost7(0);
                                        } else { setpaid_cost7(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register7}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>CLUB USAGE CHARGES FOR 1 YEAR</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost8(0);
                                            setparameters8("CLUB USAGE CHARGES FOR 1 YEAR");
                                        } else {
                                            setbasic_cost8(e.target.value);
                                            setparameters8("CLUB USAGE CHARGES FOR 1 YEAR");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost8(0);
                                        } else { setpaid_cost8(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register8}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>INTEREST FREE MAINTENANCE SECURITY (IFMS)</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost9(0);
                                            setparameters9("INTEREST FREE MAINTENANCE SECURITY (IFMS)");
                                        } else {
                                            setbasic_cost9(e.target.value);
                                            setparameters9("INTEREST FREE MAINTENANCE SECURITY (IFMS)");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost9(0);
                                        } else { setpaid_cost9(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register9}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                            {<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                <td>2 YEARS ADVANCE MAINTENANCE CHARGES</td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setbasic_cost10(0);
                                            setparameters10("2 YEARS ADVANCE MAINTENANCE CHARGES");
                                        } else {
                                            setbasic_cost10(e.target.value);
                                            setparameters10("2 YEARS ADVANCE MAINTENANCE CHARGES");
                                        }
                                    }} required /></td>
                                <td><input
                                    type="text"
                                    onChange={(e) => {
                                        if (e.target.value === '' || e.target.value === null) {
                                            setpaid_cost10(0);
                                        } else { setpaid_cost10(e.target.value) }
                                    }} required /></td>
                                <button
                                    className='applicant' style={{ backgroundColor: "#3AB4F2" }}
                                    onClick={register10}
                                >
                                    <b>Submit</b>
                                </button>
                            </tr>}
                        </tbody>
                    </table>
                </div>
                <br />
                <NavBtn>
                    <NavBtnLink to='/'><b>Done</b></NavBtnLink>
                </NavBtn>
            </div>
        </React.Fragment>
    );
}

export default OtherCharges