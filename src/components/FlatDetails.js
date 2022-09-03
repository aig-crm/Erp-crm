import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function FlatDetails(props) {

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
          <h5><b><u>FLAT and PAYMENT DETAILS</u></b></h5>
          <h6><b><u>Tower No: </u></b>{res.tower}</h6>
          <h6><b><u>Unit No: </u></b>{res.unit_no}</h6>
          <h6><b><u>Unit Type: </u></b>{res.area_sqft}</h6>
          <h6><b><u>Broker: </u></b>{res.broker}</h6>
          <h6><b><u>Plan: </u></b>{res.plan}</h6>
          <h6><b><u>Loan: </u></b>{res.loan}</h6>
          <h6><b><u>Base Price: </u></b>{res.rate}</h6>
          <h6><b><u>Net Basic Price: </u></b>{res.nbp}</h6>
          <h6><b><u>Gst: </u></b>{res.gst}</h6>
          <h6><b><u>Total Basic Price: </u></b>{res.tbc}</h6>
        </div>
      )}
    </div>
  );
}

export default FlatDetails;

