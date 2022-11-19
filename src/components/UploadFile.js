import './App.css';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Api from './Api';

function UploadFile() {

    const location = useLocation();
    const { unit_no } = location.state;

    const history = useNavigate();

    const [file, setFile] = useState();
    const [filename, setFileName] = useState("");
    const [filetype, setFiletype] = useState("");
    const [filelastModifiedDate, setFilelastModifiedDate] = useState("");
    const [selected, setselected] = useState(0);

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setFiletype(e.target.files[0].type);
        setFilelastModifiedDate(e.target.files[0].lastModifiedDate.toDateString());
        setselected(1);
    };

    const uploadFile = async (e) => {
        e.preventDefault();
        setselected(0);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("unit_no", unit_no);
        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
        try {
            const res = await Api.post(
                "/uploadFile",
                formData,
                config
            );
            if(res.data.status == 201){
                history("/")
            }else{
                console.log("error")
            }
        } catch (ex) {
            console.log(ex);
        }
    };

    if (selected === 0) {
        return (
            <div className="Postform">
                <form onSubmit={uploadFile}>
                    <h1>{unit_no} Document Upload</h1>
                    <h2>Select a file:</h2>
                    <input type="file" name='file' onChange={saveFile} />
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="Postform">
                <form onSubmit={uploadFile}>
                    <h1>{unit_no} Document Upload</h1>
                    <h2>File Details:</h2>
                    <input type="file" name='file' onChange={saveFile} />
                    <p>File Name: {filename}</p>
                    <p>File Type: {filetype}</p>
                    <p>
                        Last Modified:
                        {filelastModifiedDate}
                    </p>
                    <button type="submit">Upload</button>
                </form>
            </div>
        );
    }

}

export default UploadFile;