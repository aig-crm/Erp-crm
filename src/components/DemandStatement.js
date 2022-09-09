import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function DemandStatement(props) {

  const [result, setResult] = useState([]);

  const getData = () => {

    if (props.value != null) {
      return Api.get('/demandR/' + "'" + (props.value) + "'").then(result => {
        const res = result.data;
        return setResult(res);
      })
    } else {
      return Api.get('/demandR/').then(result => {
        const res = result.data;
        return setResult(res);
      })
    }
  }

  useEffect(() => {
    getData()
  }, []);

  if (props.value2 === 'Reminder') {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform">You are requested to remit the total dues of <b>₹ {res.pending_amount}/-</b> in favour of <b>"ALPINE INFRAPROJECTS PVT LTD"</b> payable at on or before {res.due_date}</h6>
            <h6 className="Postform">Kindly note that in case of non-receipt of due amount within stipulated time, <b>interest @10% p.a.</b> shall be charged as per company's policy on delayed payments.</h6>
            <h6 className="Postform">Thanking you & assuring you of our best services always.</h6>
            <br></br>
            <h6 className="Postform">for <b>ALPINE INFRAPROJECTS PVT LTD</b></h6>
            <br></br>
            <br></br>
            <h6 className="Postform">Authorized Signatory</h6>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform">You are requested to remit the total dues of <b>₹ {res.pending_amount}/-</b> in favour of <b>"ALPINE INFRAPROJECTS PVT LTD"</b> payable at on or before {res.due_date}</h6>
            <h6 className="Postform">Kindly note that in case of non-receipt of due amount within stipulated time, <b>interest @10% p.a.</b> shall be charged as per company's policy on delayed payments.</h6>
            <h6 className="Postform">Thanking you & assuring you of our best services always.</h6>
            <br></br>
            <h6 className="Postform">for <b>ALPINE INFRAPROJECTS PVT LTD</b></h6>
            <br></br>
            <br></br>
            <h6 className="Postform">Authorized Signatory</h6>
          </div>
        )}
      </div>
    );
  }
}

export default DemandStatement;

