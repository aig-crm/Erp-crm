import './App.css';
import 'bootstrap';
import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import Api from "./Api";
import { Link } from "react-router-dom";

function Applicants(props) {

  const [myOptions, setMyOptions] = useState([]);
  const [next, setNext] = useState("");

  const getDataFromAPI = async () => {

    return Api.get('/bookingApi/booked_units/' + "'" + (props.value) + "'").then(result => {
      const res = result.data;
      for (var i = 0; i < res.length; i++) {
        myOptions.push(res[i].unit_no)
      }
      setMyOptions(myOptions);
    })
  }

  return (
    <div className='col'>
      <div className='Postform'>
        <h2 className="mt-3 text-dark"><b>{props.value} Tower Applicants</b></h2>
        <Autocomplete
          style={{ width: 500 }}
          freeSolo
          autoComplete
          autoHighlight
          options={myOptions}
          renderInput={(params) => (
            <TextField {...params}
              onAnimationEnd={getDataFromAPI}
              variant="outlined"
              label="Search Box"
              onSelect={(e) => {
                if (e.target.value === '') {
                  setNext('');
                  console.log(next);
                } else {
                  setNext(e.target.value);
                  console.log(next);
                }
              }}
            />
          )}
        />
      </div>
      <div>
        <Link className='Postform' to='/unit' state={{ from: (next), tower: (props.value) }}><b>Next</b></Link>
      </div>
    </div>
  );
}

export default Applicants;

