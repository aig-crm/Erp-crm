import './App.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Api from './Api';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

function SeeFile() {

    const location = useLocation();
    const { unit_no } = location.state;

    const [result, setResult] = useState([]);

    const getData = async () => {

        if (unit_no != null) {
            return await Api.get('/file/' + "'" + (unit_no) + "'", {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (res.data.status == 201) {
                    setResult(res.data.data)
                } else {
                    console.log("error")
                }
            });
        } else {
            return await Api.get('/file/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="Postform">
            <h1>These are the documents for {unit_no}</h1>
            <br />
            <div className="Postform">
                {
                    result.length > 0 ? result.map((el, i)=>{
                        return (
                            <>
                            <img src={`/uploads/${el.file}`} />
                            <br />
                            <br />
                            </>
                        )
                    }):""
                }
            </div>
        </div>
    );

}

export default SeeFile;