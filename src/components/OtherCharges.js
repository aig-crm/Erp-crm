import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function OtherCharges() {

    const location = useLocation();
    const { unit_no } = location.state;

    const [result, setResult] = useState(["ONE TIME LEASE RENT", "ELECTRICITY METER CHARGES", "DG POWER BACK-UP ELECTRIC METER CHARGES", "ELECTRICAL INFRASTRUCTURE CHARGES AS PER APPOROVED DRAWING BY RESPECTIVE AUTHORITES", "CHARGES FOR ADDITIONAL PROVISION OF 1 KVA DG POWER BACKUP FACILITY AS PER UPDATED APPROVE DRAWING BY RESPECTIVE AUTHORITES", "WATER & SEWAGE CONNECTION CHARGES ^^", "IGL GAS CONNECTION INFRASTRUCTURE DEVELOPMENT CHARGES", "CLUB USAGE CHARGES FOR 1 YEAR", "INTEREST FREE MAINTENANCE SECURITY (IFMS)", "2 YEARS ADVANCE MAINTENANCE CHARGES"]);
    const parameters = [];
    const basic_cost = [];
    const paid_cost = [];

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for unit - " + (unit_no));
        Api.post("/other_charges", {
            unit_no: unit_no,
            parameters: "[" + parameters + "]",
            basic_cost: "[" + basic_cost + "]",
            paid_cost: "[" + paid_cost + "]"
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
                            </tr>
                        </thead>
                        <tbody className="table">
                            {result.map((res) => {
                                parameters.push(res)
                                return (
                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                        <td>{res}</td>
                                        <td><input
                                            type="text"
                                            onChange={(e) => {
                                                if (e.target.value === '' || e.target.value === null) {
                                                    basic_cost.push(0);
                                                } else { basic_cost.push(e.target.value) }
                                            }} required /></td>
                                        <td><input
                                            type="text"
                                            onChange={(e) => {
                                                if (e.target.value === '' || e.target.value === null) {
                                                    paid_cost.push(0);
                                                } else { paid_cost.push(e.target.value) }
                                            }} required /></td>
                                    </tr>)
                            }
                            )}
                        </tbody>
                    </table>
                </div>
                <br />
                <NavBtn onClick={register}>
                    <NavBtnLink to='/'><b>Submit</b></NavBtnLink>
                </NavBtn>
            </div>
        </React.Fragment>
    );
}

export default OtherCharges