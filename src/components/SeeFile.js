import './App.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Api from './Api';
import { useEffect } from 'react';

function SeeFile() {

    const location = useLocation();
    const { unit_no } = location.state;

    const [result, setResult] = useState([]);

    const getData = async () => {

        if (unit_no != null) {
            return await Api.get('/file/' + "'" + (unit_no) + "'"
            ).then(res => {
                setResult(res.data)
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
                    result.length > 0 ? result.map((el, i) => {
                        return (
                            <>
                                <a href={"https://371d-103-163-108-92.in.ngrok.io/uploads/" + el.file} >{el.file}</a>
                                <br />
                                <br />
                            </>
                        )
                    }) : ""
                }
            </div>
        </div>
    );

}

export default SeeFile;