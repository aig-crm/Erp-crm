import {useState,useEffect} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Api from "./Api";
  
function Table(){
 
    const[result,setResult]= useState([]);
 
    const getData = ()=>
    {

        return Api.get('/main').then(result => {
            const res = result.data;
            return setResult(res);
        })
    }
    
    useEffect(() => {
        getData();
    }, [])
 
        return (
            <div className="container">
                <h3 className="mt-3 text-dark"><b><u><center>Booked units sheet</center></u></b></h3>
                <div >
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data"/>
                   <table className="table" id="table-to-xls">
                    <thead className="thead-dark">
                    <tr>
                        <th style={{ backgroundColor: "#89CFF0" }}>Tower</th>
                        <th style={{ backgroundColor: "#7393B3" }}>Booking Date</th>
                        <th style={{ backgroundColor: "#088F8F" }}>Unit No.</th>
                        <th style={{ backgroundColor: "#0096FF" }}>Area Sq. Ft.</th>
                        <th style={{ backgroundColor: "#5F9EA0" }}>Applicant Name</th>
                        <th style={{ backgroundColor: "#00FFFF" }}>Applicant Mobile No.</th>
                        <th style={{ backgroundColor: "#6F8FAF" }}>Applicant Email No.</th>
                        <th style={{ backgroundColor: "#7DF9FF" }}>Co-Applicant Name</th>
                        <th style={{ backgroundColor: "#6082B6" }}>Co-Applicant Mobile No.</th>
                        <th style={{ backgroundColor: "#ADD8E6" }}>Co-Applicant Email No.</th>
                        <th style={{ backgroundColor: "#A7C7E7" }}>Broker</th>
                        <th style={{ backgroundColor: "#CCCCFF" }}>Plan</th>
                        <th style={{ backgroundColor: "#B6D0E2" }}>Loan</th>
                        <th style={{ backgroundColor: "#96DED1" }}>Rate</th>
                        <th style={{ backgroundColor: "#4169E1" }}>Net Basic Price</th>
                        <th style={{ backgroundColor: "#9FE2BF" }}>Gst</th>
                        <th style={{ backgroundColor: "#87CEEB" }}>Total Basic Cost</th>
                        <th style={{ backgroundColor: "#4682B4" }}>Till Date Total Due</th>
                        <th style={{ backgroundColor: "#008080" }}>Received with Gst</th>
                        <th style={{ backgroundColor: "#40E0D0" }}>Received Gst</th>
                        <th style={{ backgroundColor: "#40B5AD" }}>Received without Gst</th>
                        <th style={{ backgroundColor: "#F0FFFF" }}>Received Percentage</th>
                        <th style={{ backgroundColor: "#6495ED" }}>Balance</th>
                        <th style={{ backgroundColor: "#5D3FD3" }}>Outstandings</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                         {result.map((res)=>
                            <tr>
                            <td>{res.tower}</td>
                            <td>{res.booking_date}</td>
                            <td>{res.unit_no}</td>
                            <td>{res.area_sqft}</td>
                            <td>{res.applicant_name}</td>
                            <td>{res.applicant_mob_no}</td>
                            <td>{res.applicant_email}</td>
                            <td>{res.coapplicant_name}</td>
                            <td>{res.coapplicant_mob_no}</td>
                            <td>{res.coapplicant_email}</td>
                            <td>{res.broker}</td>
                            <td>{res.plan}</td>
                            <td>{res.loan}</td>
                            <td>{res.rate}</td>
                            <td>{res.nbp}</td>
                            <td>{res.gst}</td>
                            <td>{res.tbc}</td>
                            <td>{res.tdtd}</td>
                            <td>{res.rwgst}</td>
                            <td>{res.rgst}</td>
                            <td>{res.rwogst}</td>
                            <td>{res.rec_per}</td>
                            <td>{res.balance}</td>
                            <td>{res.o_t}</td>
                            </tr>
                          )}   
                       
                    </tbody>   
                </table>
             </div>
            </div>
        );
    }
  
export default Table