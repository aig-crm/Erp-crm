import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function ReceiptEdit() {

    const location = useLocation();
    const { date } = location.state;
    const { payment_mode } = location.state;
    const { bank_name } = location.state;
    const { rwgst } = location.state;
    const { receipt_no } = location.state;
    const { unit_no } = location.state;
    const { tower } = location.state;

    const [new_paymode, setnew_paymode] = useState("");
    const [new_bn, setnew_bn] = useState("");
    const [new_rwgst, setnew_rwgst] = useState("");

    const register = (e) => {
        e.preventDefault();
        alert("Form submitted for unit - " + (receipt_no));
        Api.put("/receipt_edit/" + "'" + (receipt_no) + "'", {
            unit_no: (unit_no),
            payment_mode: new_paymode,
            bank_name: new_bn,
            rwgst: new_rwgst,
            rgst: (new_rwgst * 0.05),
            receipt_no: (receipt_no)
        }).then((response) => {
            console.log(response);
        });
    }

    const deletereceipt = () => {

        Api.delete("/receipt_delete/" + "'" + (receipt_no) + "'")
            .then(() => this.setState({ status: 'Delete successful' }))
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>EDIT RECEIPT FOR UNIT - {unit_no}</b></h2>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b>unit no: {unit_no}</b></label>
                    <label className="Postform"><b>payment mode:</b></label>
                    <input
                        defaultValue={payment_mode}
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setnew_paymode(e.target.value) }
                        }} required />
                    <label className="Postform"><b>date: {date}</b></label>
                    <label className="Postform"><b>bank name:</b></label>
                    <input
                        defaultValue={bank_name}
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setnew_bn(e.target.value) }
                        }} required />
                    <label className="Postform"><b>Amt. received with gst:</b></label>
                    <input
                        defaultValue={rwgst}
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for unit - " + (unit_no));
                            } else { setnew_rwgst(e.target.value) }
                        }} required />
                </div>
                <NavBtn onClick={register}>
                    <NavBtnLink to='/' ><b>Submit Edited Receipt</b></NavBtnLink>
                </NavBtn>
                <br />
                <NavBtn onClick={deletereceipt}>
                    <NavBtnLink to='/' ><b>Delete Receipt</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default ReceiptEdit;