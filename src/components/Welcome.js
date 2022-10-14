import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';
import { useLocation } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { PDFExport } from '@progress/kendo-react-pdf';
import PageTemplate from './pageTemplate';
import { NavBtn, NavBtnLink } from './NavbarElements';

function Welcome() {

  const [result, setResult] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const pdfExportComponent = React.useRef(null);
  const location = useLocation();
  const { tower } = location.state;
  const { unit_no } = location.state;
  const { gst_choice } = location.state;

  const getData = () => {

    if (unit_no != null) {
      return Api.get('/main/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(result => {
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

  if(gst_choice === 'Excld GST'){return (
    <div className='Postform'>
      {result.map((res) =>

        <div className="Postform">
          <PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
            paperSize="A2"
            ref={pdfExportComponent}>
            <Grid container spacing={3} className='Postform'>
              <Grid container spacing={3} className='Postform'>
                <Grid item xs={12} sm={6}>
                  <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6 className="Postform"><b>To,</b></h6>
                <h6 className="Postform"><b>{res.applicant_name}</b></h6>
                <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
                <h6 className="Postform"><b>ADDRESS:- {res.address}</b></h6>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6 className="Postform"><b>Date: {date}</b></h6>
              </Grid>
            </Grid>
            <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL.</h6>
            <h6 className="Postform">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in <b>"AIGIN ROYAL"</b>, Plot No. D-16 SECTOR-1, G. NOIDA. We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the ALPINE INFRA PROJECTS PVT. LTD. I would take this opportunity to thank you for your application for Booking Flat No. <b>{unit_no}</b> in Tower <b>{tower}</b><b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.nbp}/- {gst_choice},
              <input
                type="text" style={{ width: "500px" }} /></b></h6>
            <h6 className="Postform"><b>However, IFMS @ Rs.25/- per sq.ft. & Lease rent @ Rs. 80/- per sq.ft. & One KVA Power back @ Rs.25000/- & E.C (GST Additional) will be payable at the time of offer for possession.</b></h6>
            <h6 className="Postform"><b>However, an amount of Rs.
              <input
                type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
            <h6 className="Postform">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b> as chosen by you.</h6>
            <h6 className="Postform">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @10% P.A. shall be levied on any delayed payment.</h6>
            <h6 className="Postform">In Case of any further Assistance, please contact <b>
              <input
                type="text" style={{ width: "370px" }} /></b></h6>
            <h6 className="Postform">Thanking You, </h6>
            <h6 className="Postform">For <b>ALPINE INFRA PROJECTS PVT. LTD.</b></h6>
            <br />
            <br />
            <h6 className="Postform"><b>(Authorized Signatory)</b></h6>
          </PDFExport>
          <NavBtn
            onClick={() => {
              if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
              }
            }}
          ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
          </NavBtn>
        </div>
      )}
    </div>
  );}
  else{return (
    <div className='Postform'>
      {result.map((res) =>

        <div className="Postform">
          <PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
            paperSize="A2"
            ref={pdfExportComponent}>
            <Grid container spacing={3} className='Postform'>
              <Grid container spacing={3} className='Postform'>
                <Grid item xs={12} sm={6}>
                  <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6 className="Postform"><b>To,</b></h6>
                <h6 className="Postform"><b>{res.applicant_name}</b></h6>
                <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
                <h6 className="Postform"><b>ADDRESS:- {res.address}</b></h6>
              </Grid>
              <Grid item xs={12} sm={6}>
                <h6 className="Postform"><b>Date: {date}</b></h6>
              </Grid>
            </Grid>
            <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL.</h6>
            <h6 className="Postform">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in <b>"AIGIN ROYAL"</b>, Plot No. D-16 SECTOR-1, G. NOIDA. We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the ALPINE INFRA PROJECTS PVT. LTD. I would take this opportunity to thank you for your application for Booking Flat No. <b>{unit_no}</b> in Tower <b>{tower}</b><b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.tbc}/- {gst_choice},
              <input
                type="text" style={{ width: "500px" }} /></b></h6>
            <h6 className="Postform"><b>However, IFMS @ Rs.25/- per sq.ft. & Lease rent @ Rs. 80/- per sq.ft. & One KVA Power back @ Rs.25000/- & E.C (GST Additional) will be payable at the time of offer for possession.</b></h6>
            <h6 className="Postform"><b>However, an amount of Rs.
              <input
                type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
            <h6 className="Postform">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b> as chosen by you.</h6>
            <h6 className="Postform">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @10% P.A. shall be levied on any delayed payment.</h6>
            <h6 className="Postform">In Case of any further Assistance, please contact <b>
              <input
                type="text" style={{ width: "370px" }} /></b></h6>
            <h6 className="Postform">Thanking You, </h6>
            <h6 className="Postform">For <b>ALPINE INFRA PROJECTS PVT. LTD.</b></h6>
            <br />
            <br />
            <h6 className="Postform"><b>(Authorized Signatory)</b></h6>
          </PDFExport>
          <NavBtn
            onClick={() => {
              if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
              }
            }}
          ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
          </NavBtn>
        </div>
      )}
    </div>
  );}
}

export default Welcome;

