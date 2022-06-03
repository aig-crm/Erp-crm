import React, { useState } from "react";
import Axios from 'axios';
import Select from 'react-select';

function PostForm(){

    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
      ];

    const url="https://2aee-2402-3a80-122f-8b47-6833-999f-b374-2cec.in.ngrok.io/api/customer";
    const [data, setData] = useState({
        s_no:0,
        booking_date:"",
        tower:"",
        unit_no:"", 
        area_sqft:0, 
        name:"", 
        mob_no:"", 
        email:"", 
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
            name:data.name,
            mob_no:data.mob_no,
            email:data.email,
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
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="s_no" value={data.s_no} placeholder="S No" type="number"></input>
                <input onChange={(e)=>handle(e)} id="booking_date" value={data.booking_date} placeholder="Booking Date" type="date"></input>
                <input onChange={(e)=>handle(e)} id="tower" value={data.tower} placeholder="Tower" type="text"></input>
                <input onChange={(e)=>handle(e)} id="unit_no" value={data.unit_no} placeholder="Unit No" type="text"></input>
                <input onChange={(e)=>handle(e)} id="area_sqft" value={data.area_sqft} placeholder="Area Sq ft" type="number"></input>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="mob_no" value={data.mob_no} placeholder="Mobile No" type="text"></input>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Email" type="text"></input>
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