import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';
import { useLocation } from 'react-router-dom';
import { Paper } from '@material-ui/core';

function BrokerDetails() {

  const [result, setResult] = useState([]);

  const location = useLocation();
  const { bcn } = location.state;

  const getData = () => {

    if (bcn != null) {
      return Api.get('/brokerDetails/' + "'" + (bcn) + "'").then(result => {
        const res = result.data;
        return setResult(res);
      })
    } else {
      return Api.get('/brokerDetails/').then(result => {
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
          <Paper >
            <div className="applicant">
              <div className='row'>
                <div className='col'>
                  <h6 className="Postform"><b>Broker Company Name - {bcn}</b></h6>
                  <h6 className="Postform"><b>Broker Code - </b>{res.broker_code}</h6>
                  <h6 className="Postform"><b>Bank Name - </b>{res.bank_name}</h6>
                  <h6 className="Postform"><b>Broker Name - </b>{res.name}</h6>
                  <h6 className="Postform"><b>Date Of Birth - </b>{res.dob}</h6>
                  <h6 className="Postform"><b>Service Tax No. - </b>{res.sevice_tax_no}</h6>
                  <h6 className="Postform"><b>Gstin - </b>{res.gstin}</h6>
                  <h6 className="Postform"><b>Gst State - </b>{res.gst_state}</h6>
                  <h6 className="Postform"><b>Effective Date - </b>{res.eff_date}</h6>
                </div>
                <div className='col'>
                  <h6 className="Postform"><b>Rera No. - </b>{res.rera_no}</h6>
                  <h6 className="Postform"><b>Pan No. - </b>{res.pan_no}</h6>
                  <h6 className="Postform"><b>Tan No. - </b>{res.tan_no}</h6>
                  <h6 className="Postform"><b>License No. - </b>{res.licence_no}</h6>
                  <h6 className="Postform"><b>STD Code - </b>{res.std_code}</h6>
                  <h6 className="Postform"><b>Phone No. - </b>{res.phone_no}</h6>
                  <h6 className="Postform"><b>Mobile No. - </b>{res.mob_no}</h6>
                  <h6 className="Postform"><b>Email - </b>{res.email}</h6>
                  <h6 className="Postform"><b>Address - </b>{res.address}</h6>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
}

export default BrokerDetails;

