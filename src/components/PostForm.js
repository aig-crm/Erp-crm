import React, { useState } from "react";
import Axios from 'axios';
import Select from 'react-select';

function PostForm(){

    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

    const url="https://3cb3-2401-4900-1c5e-d332-401c-1182-840a-b049.in.ngrok.io/api/customer";
    const [data, setData] = useState({
        s_no:0,
        booking_date:"",
        tower:"",
        unit_no:"", 
        area_sqft:0, 
        applicant_name:"", 
        applicant_mob_no:"", 
        applicant_email:"",
        coapplicant_name:"", 
        coapplicant_mob_no:"", 
        coapplicant_email:"",
        broker:"", 
        plan:"", 
        loan:"", 
        nbp:0, 
        tbc:0,
        floor:0, 
        basement:""
    });

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            s_no:parseInt(data.s_no),
            booking_date:data.booking_date,
            tower:data.tower,
            unit_no:data.unit_no,
            area_sqft:parseInt(data.area_sqft),
            applicant_name:data.applicant_name,
            applicant_mob_no:data.applicant_mob_no,
            applicant_email:data.applicant_email,
            coapplicant_name:data.coapplicant_name,
            coapplicant_mob_no:data.coapplicant_mob_no,
            coapplicant_email:data.coapplicant_email,
            broker:data.broker,
            plan:data.plan,
            loan:data.loan,
            nbp:parseInt(data.nbp),
            tbc:parseInt(data.tbc),
            floor:parseInt(data.floor),
            basement:data.basement
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }

    return(
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="s_no" value={data.s_no} placeholder="S No" type="number"></input>
                <input onChange={(e)=>handle(e)} id="booking_date" value={data.booking_date} placeholder="Booking Date" type="date"></input>
                <input onChange={(e)=>handle(e)} id="tower" value={data.tower} placeholder="Tower" type="text"></input>
                <input onChange={(e)=>handle(e)} id="unit_no" value={data.unit_no} placeholder="Unit No" type="text"></input>
                <input onChange={(e)=>handle(e)} id="area_sqft" value={data.area_sqft} placeholder="Area Sq ft" type="number"></input>
                <input onChange={(e)=>handle(e)} id="applicant_name" value={data.applicant_name} placeholder="Applicant name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="applicant_mob_no" value={data.applicant_mob_no} placeholder="Applicant mobile no" type="text"></input>
                <input onChange={(e)=>handle(e)} id="applicant_email" value={data.applicant_email} placeholder="Applicant email" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_name" value={data.coapplicant_name} placeholder="Co-Applicant Name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_mob_no" value={data.coapplicant_mob_no} placeholder="Co-Applicant Mobile No" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_email" value={data.coapplicant_email} placeholder="Co-Applicant Email" type="text"></input>
                <input onChange={(e)=>handle(e)} id="broker" value={data.broker} placeholder="Broker" type="text"></input>
                <input onChange={(e)=>handle(e)} id="plan" value={data.plan} placeholder="Plan" type="text"></input>
                <input onChange={(e)=>handle(e)} id="loan" value={data.loan} placeholder="Loan" type="text"></input>
                <input onChange={(e)=>handle(e)} id="nbp" value={data.nbp} placeholder="Net Basic Price" type="number"></input>
                <input onChange={(e)=>handle(e)} id="tbc" value={data.tbc} placeholder="Total Basic Price" type="number"></input>
                <input onChange={(e)=>handle(e)} id="floor" value={data.floor} placeholder="Floor" type="number"></input>
                <input onChange={(e)=>handle(e)} id="basement" value={data.basement} placeholder="Basement" type="text"></input>
                <button>Submit</button>
                <Select options={ actions } />
            </form>
        </div>
    );
}

export default PostForm;