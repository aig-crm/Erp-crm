import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function CustomerDetails(props) {

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
          <h5><b><u>APPLICANT and CO-APPLICANT DETAILS</u></b></h5>
          <h6><b><u>Applicant Name: </u></b>{res.applicant_name}</h6>
          <h6><b><u>Applicant Mobile No: </u></b>{res.applicant_mob_no}</h6>
          <h6><b><u>Applicant Email Address: </u></b>{res.applicant_email}</h6>
          <h6><b><u>Co-Applicant Name: </u></b>{res.coapplicant_name}</h6>
          <h6><b><u>Co-Applicant Mobile No: </u></b>{res.coapplicant_mob_no}</h6>
          <h6><b><u>Co-Applicant Email Address: </u></b>{res.coapplicant_email}</h6>
          <h6><b><u>Address: </u></b>{res.address}</h6>
          <h6><b><u>Aadhar Card No: </u></b>{res.aadhar_card}</h6>
          <h6><b><u>Pan Card No: </u></b>{res.pan_card}</h6>
        </div>
      )}
    </div>
  );
}

export default CustomerDetails;

