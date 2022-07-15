import Axios from "axios";
import React,{useState}from"react";
import AsyncSelect from 'react-select/async';
import api from './Api'
import Navbar from "./Navbar";
function PostForm(){

    const[bd,setbd]=useState("");
    const[t,sett]=useState("");
    const[l,setl]=useState("");
    const[broker,setbroker]=useState("");
    const[nbp,setnbp]=useState("");
    const[tbp,settbp]=useState("");
    const[bt,setbt]=useState("");
    const[an,setan]=useState("");
    const[amn,setamn]=useState("");
    const[ae,setae]=useState("");
    const[can,setcan]=useState("");
    const[camn,setcamn]=useState("");
    const[cae,setcae]=useState("");
    const[floor,setfloor]=useState("");

    const [inputValue1, setValue1] = useState("");
    const [selectedValue1, setSelectedValue1] = useState(null);
    const [inputValue2, setValue2] = useState("");
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [inputValue3, setValue3] = useState("");
    const [selectedValue3, setSelectedValue3] = useState(null);
    // const [inputValue4, setValue4] = useState('');
    // const [selectedValue4, setSelectedValue4] = useState(null);

  // handle input change event
  const handleInputChange1 = value => {
    setValue1(value);
  };
  // handle selection
  const handleChange1 = value => {
    setSelectedValue1(value);
    console.log('value', value);
  }
  const fetchData1 = () => {
    return  api.get('/bookingApi/unit_no').then(result => {
      const res =  result.data;
      return res;
    });
  }

  // handle input change event
  const handleInputChange2 = value => {
    setValue2(value);
  };
  // handle selection
  const handleChange2 = value => {
    setSelectedValue2(value);
  }
  const fetchData2 = () => {
    return  api.get('/bookingApi/area_sqft').then(result => {
      const res =  result.data;
      return res;
    });
  }

  // handle input change event
  const handleInputChange3 = value => {
    setValue3(value);
  };
  // handle selection
  const handleChange3 = value => {
    setSelectedValue3(value);
  }
  const fetchData3 = () => {
    return  api.get('/bookingApi/payment_plan').then(result => {
      const res =  result.data;
      return res;
    });
  }

//   // handle input change event
//   const handleInputChange4 = value => {
//     setValue4(value);
//   };
//   // handle selection
//   const handleChange4 = value => {
//     setSelectedValue4(value);
//   }
//   const fetchData4 = () => {
//     return  api.get('/users?page=1').then(result => {
//       const res =  result.data.data;
//       return res;
//     });
//   }

    const register=(e)=>{
        e.preventDefault();
        Axios.post("https://585a-2401-4900-1f3a-ec0-b87d-1595-7e80-32f2.in.ngrok.io/api/customer", {
        booking_date:bd,
        tower:t,
        broker:broker,
        unit_no: JSON.stringify(selectedValue1),
        floor:floor,
        area_sqft: JSON.stringify(selectedValue2),
        plan: JSON.stringify(selectedValue3),
        applicant_name:an, 
        applicant_mob_no:amn, 
        applicant_email:ae,
        coapplicant_name:can, 
        coapplicant_mob_no:camn, 
        coapplicant_email:cae,
        loan:l, 
        nbp:nbp, 
        tbc:tbp,
        basement:bt
        }).then((response)=>{
            console.log(response);
        });
        
    }

  return(
   <div>
      <div className="registration">
        <h1 className="mt-3 text-dark"><b>BOOKING FORM</b></h1>
        <h6 className="mt-3 text-dark"><b><u>Flat details</u></b></h6>
        <div className="mt-3 text-dark">
            <label className="Postform"><b>booking date:</b></label>
            <input 
                type="date"
                onChange={(e)=>{
                    setbd(e.target.value)
                }}/>
            <label className="Postform"><b>broker:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setbroker(e.target.value)
                }}/>
            <label className="Postform"><b>tower:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    sett(e.target.value)
                }}/>
            <label className="Postform"><b>floor:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setfloor(e.target.value)
                }}/>
            {/*unit_no
            area_sqft
            broker
            plan*/}

            <div className="mt-3 text-dark">
                <div className="row">
                    <div className="col-md-4">
                        <label className="Postform"><b>unit no:</b></label>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            value={selectedValue1}
                            getOptionLabel={e=>e.unit_no}
                            getOptionValue={e=>e.unit_no}
                            loadOptions={fetchData1}
                            on InputChange={handleInputChange1}
                            onChange={handleChange1}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="Postform"><b>unit type:</b></label>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            value={selectedValue2}
                            getOptionLabel={e=>e.area_sqft}
                            getOptionValue={e=>e.area_sqft}
                            loadOptions={fetchData2}
                            on InputChange={handleInputChange2}
                            onChange={handleChange2}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="Postform"><b>payment plan:</b></label>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            value={selectedValue3}
                            getOptionLabel={e=>e.plan}
                            getOptionValue={e=>e.plan}
                            loadOptions={fetchData3}
                            on InputChange={handleInputChange3}
                            onChange={handleChange3}
                        />
                    </div>
                </div>
            </div>

            <label className="Postform"><b>loan:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setl(e.target.value)
                }}/>
            <label className="Postform"><b>net base price:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setnbp(e.target.value)
                }}/>
            <label className="Postform"><b>total base price:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    settbp(e.target.value)
                }}/>
            <label className="Postform"><b>basement:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setbt(e.target.value)
                }}/>
        </div>
        <h6 className="mt-3 text-dark"><b><u>Applicant details</u></b></h6>
        <div className="mt-3 text-dark">
            <label className="Postform"><b>applicant name:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setan(e.target.value)
                }}/>
            <label className="Postform"><b>applicant mobile no:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setamn(e.target.value)
                }}/>
            <label className="Postform"><b>applicant email:</b></label>
            <input 
                type="email"
                onChange={(e)=>{
                    setae(e.target.value)
                }}/>
        </div>
        <h6 className="mt-3 text-dark"><b><u>Co-applicant details</u></b></h6>
        <div className="mt-3 text-dark">
            <label className="Postform"><b>coapplicant name:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setcan(e.target.value)
                }}/>
            <label className="Postform"><b>coapplicant mobile no:</b></label>
            <input 
                type="text"
                onChange={(e)=>{
                    setcamn(e.target.value)
                }}/>
            <label className="Postform"><b>coapplicant email:</b></label>
            <input 
                type="email"
                onChange={(e)=>{
                    setcae(e.target.value)
                }}/>
        </div>
        <button onClick={register}>SUBMIT</button>
      </div>

   </div>

   
 );
}

export default PostForm;