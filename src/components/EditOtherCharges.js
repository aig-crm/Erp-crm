import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function EditOtherCharges() {

    const location = useLocation();
    const { id } = location.state;
    const { unit_no } = location.state;
    const { tower } = location.state;
    const { gst_choice } = location.state;
    const { parameters } = location.state;
    const { basic_cost } = location.state;
    const { paid_cost } = location.state;

    const [new_basic_cost, setnew_basic_cost] = useState("");
    const [new_paid_cost, setnew_paid_cost] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for unit - " + (unit_no));
        Api.put("/other_charges_edit/" + "'" + (id) + "'", {
            basic_cost: new_basic_cost,
            paid_cost: new_paid_cost
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>EDIT OTHER CHARGES FOR UNIT - {unit_no}</b></h2>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>unit no: {unit_no}</b></label>
                    <label className="Postform"><b>parameters: {parameters}</b></label>
                    <label className="Postform"><b>basic cost:</b></label>
                    <input
                        defaultValue={basic_cost}
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setnew_basic_cost(basic_cost);
                            } else { setnew_basic_cost(e.target.value) }
                        }} required />
                    <label className="Postform"><b>paid_cost:</b></label>
                    <input
                        defaultValue={paid_cost}
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                setnew_paid_cost(paid_cost);
                            } else { setnew_paid_cost(e.target.value) }
                        }} required />
                </div>
                <br />
                <NavBtn onClick={register}>
                    <NavBtnLink to='/unit' state={{ from: (unit_no), tower: (tower), gst_choice: (gst_choice) }}><b>Submit Edited Other Charges</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default EditOtherCharges;