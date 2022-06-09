import React, { useEffect, useState } from "react";

const UseEffectApi = () =>{

    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('https://7279-2401-4900-1c60-81e6-5171-75fa-5f61-7c3a.in.ngrok.io/api/main');
        setUsers(await response.json());

    }

    useEffect(() =>{
        getUsers();
    }, []);

    return(
        <>
            <h2>List of C units</h2>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="row text-center">

                        {

                            users.map((curElem) =>{
                                return(
                                    <div className="col-10 col-md-4 mt-5" key={curElem.s_no}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="ml-3 w-100">
                                                    <h3 className="mb-0 mt-0 textLeft"><b>{curElem.unit_no}</b></h3>
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.applicant_name}</h4>
                                                    <span className="textLeft">{curElem.applicant_email}</span>
                                                    <span className="textLeft">{curElem.applicant_mob_no}</span>
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.coapplicant_name}</h4>
                                                    <span className="textLeft">{curElem.coapplicant_email}</span>
                                                    <span className="textLeft">{curElem.coapplicant_mob_no}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"> 
                                                        <span className="rate">Rate</span> 
                                                        <span className="number1">{curElem.rate}</span>
                                                    </div>
                                                    <div className="d-flex flex-column"> 
                                                        <span className="nbp">Net basic price</span> 
                                                        <span className="number2">{curElem.nbp}</span>
                                                    </div>
                                                    <div className="d-flex flex-column"> 
                                                        <span className="gst">GST</span> 
                                                        <span className="number3">{curElem.gst}</span>
                                                    </div>
                                                    <div className="d-flex flex-column"> 
                                                        <span className="tbc">Total basic cost</span> 
                                                        <span className="number4">{curElem.tbc}</span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default UseEffectApi;