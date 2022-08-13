import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function ApplicantDetails(props) {

  const [result, setResult] = useState([]);

    const getData = () => {

        if (props.value != null) {
            return Api.get('/main/' + "'" + (props.value2) + "'/" + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/main/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

  return (
    <div className='applicant'>
      {result.map((res) =>

        <div className="Postform">
            <h6 ><b>Customer id: AR-{props.value}</b></h6>
            <h6><b>{res.applicant_name}</b></h6>
            <h6><b>{res.address}</b></h6>
            <h6><b>(M): </b>{res.applicant_mob_no}</h6>
            <h6><b>Email: </b>{res.applicant_email}</h6>
        </div>
        )}
    </div>
  );
}

export default ApplicantDetails;

