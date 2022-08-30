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

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, result, currentPage]);

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
                                <th className="table">Description</th>
                                <th className="table">Due Amount</th>
                                <th className="table">Due Date</th>
                                <th className="table">Received Date</th>
                                <th className="table">Received Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>

                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.description}</td>
                                    <td>{res.due_amt}</td>
                                    <td>{res.due_date}</td>
                                    <td>{res.received_date}</td>
                                    <td>{res.received_amt}</td>
                                </tr>
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