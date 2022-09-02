import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function InterestTable(props) {

    let PageSize = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const [result, setResult] = useState([]);

    const getData = () => {

        if (props.value != null) {
            return Api.get('/arr/' + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/arr/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.ceil(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
      }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result, currentPage]);

    const printRef = React.useRef();
    console.log(result.map((res)=> getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))));

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        if (props.value != null) {
            pdf.save((props.value) + '-Interest Report.pdf');
        } else {
            pdf.save('Interest Report.pdf');
        }
    };

    return (

        <React.Fragment>
            <div className="row" ref={printRef}>
                <div >
                    <h3 className="mt-3 text-dark"><b><u><center>{props.value} Interest Report</center></u></b></h3>

                    <CSVLink data={result} filename="Interest Report" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {props.value} Interest Report
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">INSTALLMENT NAME</th>
                                <th className="table">INSTALLMENT DATE</th>
                                <th className="table">DUE AMOUNT</th>
                                <th className="table">AMOUNT RECEIVED</th>
                                <th className="table">DATE OF RECEIVED</th>
                                <th className="table">DELAY AMOUNT</th>
                                <th className="table">DELAY DAYS</th>
                                <th className="table">GRACE PERIOD</th>
                                <th className="table">INTEREST PERIOD</th>
                                <th className="table">ROI</th>
                                <th className="table">INTEREST AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>
                                {if(getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))<0){
                                    return(<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.description}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.due_amt}</td>
                                    <td>{res.received_amt}</td>
                                    <td>{res.received_date}</td>
                                    <td>{parseInt(res.due_amt)-parseInt(res.received_amt)}</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>0</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>10</td>
                                    <td>0</td>
                                </tr>)}
                                else if(parseInt(res.due_amt)<parseInt(res.received_amt) && getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))>0){
                                    return(<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.description}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.due_amt}</td>
                                    <td>{res.received_amt}</td>
                                    <td>{res.received_date}</td>
                                    <td>{parseInt(res.due_amt)-parseInt(res.received_amt)}</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>0</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>10</td>
                                    <td>{Math.round(res.due_amt*getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))*0.1/365)}</td>
                                </tr>)
                                }else if((res.due_date==='')){
                                    return(<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    
                                </tr>)
                                }
                                else{
                                    return(<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.description}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.due_amt}</td>
                                    <td>{res.received_amt}</td>
                                    <td>{res.received_date}</td>
                                    <td>{parseInt(res.due_amt)-parseInt(res.received_amt)}</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>0</td>
                                    <td>{getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))}</td>
                                    <td>10</td>
                                    <td>{Math.round(res.received_amt*getDifferenceInDays(new Date(res.due_date), new Date(res.received_date))*0.1/365)}</td>
                                </tr>)
                                }
                            }
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={result.length-1}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                    <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InterestTable