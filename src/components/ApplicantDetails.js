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
    <div>
      {result.map((res) =>

        <div className="Postform">
          <h6 className="Postform"><b>Customer id: AR-{props.value}</b></h6>
          <h6 className="Postform"><b>{res.applicant_name}</b></h6>
          <h6 className="Postform"><b>{res.address}</b></h6>
          <h6 className="Postform"><b>(M): </b>{res.applicant_mob_no}</h6>
          <h6 className="Postform"><b>Email: </b>{res.applicant_email}</h6>
        </div>
      )}
    </div>
  );
}

export default ApplicantDetails;

