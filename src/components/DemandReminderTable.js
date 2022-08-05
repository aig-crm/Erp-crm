import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function DemandReminderTable(props) {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);

    const getData = () => {

        if (props.value != null) {
            return Api.get('/demand/' + "'" + (props.value2) + "'/" + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/demand/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    const getData2 = () => {

        if (props.value != null) {
            return Api.get('/reminder/' + "'" + (props.value2) + "'/" + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setResult2(res);
            })
        } else {
            return Api.get('/reminder/').then(result => {
                const res = result.data;
                return setResult2(res);
            })
        }
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        getData2()
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result, currentPage]);

    const currentTableData2 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result2.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result2, currentPage]);

    const printRef = React.useRef();

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
          pdf.save((props.value) + '-demand reminder report.pdf');
        }else{
          pdf.save('Demand reminder report.pdf');
        }
      };

    return (

        <React.Fragment>
            <div className="row" ref={printRef}>
                <div className="col-sm-8">
                    <h3 className="mt-3 text-dark"><b><u><center>Demand-Reminder of {props.value} unit</center></u></b></h3>

                    <CSVLink data={result} filename="Demand-Reminder Data" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {props.value} Demand-Reminder Data
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Tower</th>
                                <th className="table">Unit No.</th>
                                <th className="table">Due Date</th>
                                <th className="table">Perticulars</th>
                                <th className="table">Percentage</th>
                                <th className="table">Net Base Selling Price</th>
                                <th className="table">GST</th>
                                <th className="table">Net Due Amount</th>
                                <th className="table">Received Amount</th>
                                <th className="table">Pending Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.tower}</td>
                                    <td>{res.unit_no}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.particulars}</td>
                                    <td>{res.percentage}</td>
                                    <td>{res.net_bsp}</td>
                                    <td>{res.gst}</td>
                                    <td>{res.net_due}</td>
                                    <td>{res.recieved}</td>
                                    <td>{res.pending_amount}</td>
                                </tr>
                            )}
                            {currentTableData2.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#c61a09" }}>
                                    <td>{res.tower}</td>
                                    <td>{res.unit_no}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.particulars}</td>
                                    <td>{res.percentage}</td>
                                    <td>{res.net_bsp}</td>
                                    <td>{res.gst}</td>
                                    <td>{res.net_due}</td>
                                    <td>{res.recieved}</td>
                                    <td>{res.pending_amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={result.length}
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

export default DemandReminderTable