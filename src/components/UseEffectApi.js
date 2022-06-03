import React, { useEffect, useState } from "react";

const UseEffectApi = () =>{

    const [users, setUsers] = useState([]);

    const getUsers = async () =>{
        const response = await fetch('http://localhost:80/api/main');
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
                                                <div className="image"> 
                                                <img src="" className="rounded" width="155" /> </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.name}</h4> 
                                                    <span className="textLeft">{curElem.unit_no}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"> 
                                                        <span className="articles">Rate</span> 
                                                        <span className="number1">{curElem.rate}</span>
                                                    </div>
                                                    <div className="d-flex flex-column"> 
                                                        <span className="followers">Net basic price</span> 
                                                        <span className="number2">{curElem.nbp}</span>
                                                    </div>
                                                    <div className="d-flex flex-column"> 
                                                        <span className="rating">Total basic price</span> 
                                                        <span className="number3">{curElem.tbc}</span>
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