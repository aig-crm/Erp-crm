import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function StatementSubject(props) {

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

  if (props.value3 === 'Reminder') {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform"><b>Subject:- </b><b><u>Reminder against tower {props.value2} Unit no. {props.value} having area {res.area_sqft} Sq Ft in AIG ROYAL situated at PLOT NO. D-16 SECTOR-1, G.NOIDA WEST</u></b></h6>
            <h6 className="Postform">Dear Sir/Ma'am,</h6>
            <h6 className="Postform">This has reference to your booking of the above mentioned unit. This is to inform you that the following amount stands due as per the payment plan opted by you.</h6>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform"><b>Subject:- </b><b><u>Demand against tower {props.value2} Unit no. {props.value} having area {res.area_sqft} Sq Ft in AIG ROYAL situated at PLOT NO. D-16 SECTOR-1, G.NOIDA WEST</u></b></h6>
            <h6 className="Postform">Dear Sir/Ma'am,</h6>
            <h6 className="Postform">This has reference to your booking of the above mentioned unit. This is to inform you that the following amount stands due as per the payment plan opted by you.</h6>
          </div>
        )}
      </div>
    );
  }
}

export default StatementSubject;

