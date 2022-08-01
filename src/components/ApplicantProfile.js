import './App.css';
import 'bootstrap';
import React from 'react';

function ApplicantProfile(props) {

  return (
    <div className='applicant'>
      Hello {props.value}
    </div>
  );
}

export default ApplicantProfile;

