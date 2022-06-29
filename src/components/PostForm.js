import React, { useState } from "react";
import Axios from 'axios';
import AsyncSelect from 'react-select/async';
import Api from "./Api";

function PostForm(){

    const[inputValue1,setValue1] = useState('');
    const[inputValue2,setValue2] = useState('');
    const[inputValue3,setValue3] = useState('');
    const[selectedValue1,setSelectedValue1] = useState(null);
    const[selectedValue2,setSelectedValue2] = useState(0);
    const[selectedValue3,setSelectedValue3] = useState(null);
    // handle input change event
    // const handleInputChange1=value=>{
    // setValue1(value);}
    // const handleInputChange2=value=>{
    // setValue2(value);}
    // const handleInputChange3=value=>{
    // setValue3(value);}
    // handle selection
    const handleChange1=value=>{
    setSelectedValue1(value);
    }
    const handleChange2=value=>{
        setSelectedValue2(value);
    }
    const handleChange3=value=>{
    setSelectedValue3(value);
    }

    const fetchData1=()=>{
        return Api.get('/bookingApi/unit_no').then(result => {
            const res = result.data;
            console.log(res);
            return res;
        })
    };
    const fetchData2=()=>{
        return Api.get('/bookingApi/area_sqft').then(result => {
            const res = result.data;
            console.log(res);
            return res;
        })
    };
    const fetchData3=()=>{
        return Api.get('/bookingApi/payment_plan').then(result => {
            const res = result.data;
            console.log(res);
            return res;
        })
    };

    const url="https://6705-2401-4900-1c5f-11bd-a580-15e1-4fad-d5c7.in.ngrok.io/api/customer";
    const [data, setData] = useState({
        booking_date:"",
        tower:"",
        applicant_name:"", 
        applicant_mob_no:"", 
        applicant_email:"",
        coapplicant_name:"", 
        coapplicant_mob_no:"", 
        coapplicant_email:"",
        broker:"",
        loan:"", 
        nbp:0, 
        tbc:0,
        floor:0, 
        basement:""
    });

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            booking_date:data.booking_date,
            tower:data.tower,
            unit_no:selectedValue1,
            area_sqft:selectedValue2,
            applicant_name:data.applicant_name,
            applicant_mob_no:data.applicant_mob_no,
            applicant_email:data.applicant_email,
            coapplicant_name:data.coapplicant_name,
            coapplicant_mob_no:data.coapplicant_mob_no,
            coapplicant_email:data.coapplicant_email,
            broker:data.broker,
            plan:selectedValue3,
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
            <h2 className="mt-3 text-dark">Booking Form</h2>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=>handle(e)} id="booking_date" value={data.booking_date} placeholder="Booking Date" type="date"></input>
                <input onChange={(e)=>handle(e)} id="tower" value={data.tower} placeholder="Tower" type="text"></input>
                <input onChange={(e)=>handle(e)} id="applicant_name" value={data.applicant_name} placeholder="Applicant name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="applicant_mob_no" value={data.applicant_mob_no} placeholder="Applicant mobile no" type="text"></input>
                <input onChange={(e)=>handle(e)} id="applicant_email" value={data.applicant_email} placeholder="Applicant email" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_name" value={data.coapplicant_name} placeholder="Co-Applicant Name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_mob_no" value={data.coapplicant_mob_no} placeholder="Co-Applicant Mobile No" type="text"></input>
                <input onChange={(e)=>handle(e)} id="coapplicant_email" value={data.coapplicant_email} placeholder="Co-Applicant Email" type="text"></input>
                <input onChange={(e)=>handle(e)} id="broker" value={data.broker} placeholder="Broker" type="text"></input>
                <input onChange={(e)=>handle(e)} id="loan" value={data.loan} placeholder="Loan" type="text"></input>
                <input onChange={(e)=>handle(e)} id="nbp" value={data.nbp} placeholder="Net Basic Price" type="number"></input>
                <input onChange={(e)=>handle(e)} id="tbc" value={data.tbc} placeholder="Total Basic Price" type="number"></input>
                <input onChange={(e)=>handle(e)} id="floor" value={data.floor} placeholder="Floor" type="number"></input>
                <input onChange={(e)=>handle(e)} id="basement" value={data.basement} placeholder="Basement" type="text"></input>
                <button>Submit</button>
                <AsyncSelect className="mt-3 text-dark"
                    cacheOptions
                    defaultOptions
                    value={selectedValue1}
                    getOptionLabel={e=>e.unit_no}
                    loadOptions={fetchData1}
                    on InputChange={(e)=>handle(e)}
                    onChange={handleChange1}
                    id="unit_no" placeholder="Unit No" type="text">
                </AsyncSelect>
                <AsyncSelect className="mt-3 text-dark"
                    cacheOptions
                    defaultOptions
                    value={selectedValue2}
                    getOptionLabel={e=>e.area_sqft}
                    loadOptions={fetchData2}
                    on InputChange={(e)=>handle(e)}
                    onChange={handleChange2}
                    id="area_sqft" placeholder="Area Sq ft" type="text">
                </AsyncSelect>
                <AsyncSelect className="mt-3 text-dark"
                    cacheOptions
                    defaultOptions
                    value={selectedValue3}
                    getOptionLabel={e=>e.plan}
                    loadOptions={fetchData3}
                    on InputChange={(e)=>handle(e)}
                    onChange={handleChange3}
                    id="plan" placeholder="Plan" type="text">
                </AsyncSelect>
                    
            </form>
        </div>
    );
}

export default PostForm;