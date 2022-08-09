import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";

function ReceiptTable() {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState([]);
    const location = useLocation();
    const { tower } = location.state;
    const { unit_no } = location.state;

    const getData = () => {

        if (unit_no != null) {
            return Api.get('/receipt_approved/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/receipt_approved/').then(result => {
                const res = result.data;
                return setResult(res);
            })
        }
    }

    const getData2 = () => {

        if (unit_no != null) {
            return Api.get('/receipt_pending/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(result => {
                const res = result.data;
                return setResult2(res);
            })
        } else {
            return Api.get('/receipt_pending/').then(result => {
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
        if (unit_no != null) {
          pdf.save((unit_no) + '-receipt.pdf');
        }else{
          pdf.save('Receipt.pdf');
        }
      };

    return (

        <React.Fragment>
            <div className="row" ref={printRef}>
                <div className="col-sm-8">
                    <h3 className="mt-3 text-dark"><b><u><center>Receipts of {unit_no} unit</center></u></b></h3>

                    <CSVLink data={result} filename="Receipts Data" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {unit_no} Receipts Data
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr style={{ backgroundColor: "#0078AA" }}>
                                <th className="table">Date</th>
                                <th className="table">Payment Mode</th>
                                <th className="table">Bank Name</th>
                                <th className="table">Amt. Received with GST</th>
                                <th className="table">Received GST</th>
                                <th className="table">Receipt No.</th>
                                <th className="table">Status</th>
                            </tr>
                        </thead>
                        <tbody className="table">
                            {currentTableData.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.date}</td>
                                    <td>{res.payment_mode}</td>
                                    <td>{res.bank_name}</td>
                                    <td>{res.rwgst}</td>
                                    <td>{res.rgst}</td>
                                    <td>{res.receipt_no}</td>
                                    <td>{res.status}</td>
                                </tr>
                            )}
                            {currentTableData2.map((res) =>
                                <tr className="Postform" style={{ backgroundColor: "#c61a09" }}>
                                    <td>{res.date}</td>
                                    <td>{res.payment_mode}</td>
                                    <td>{res.bank_name}</td>
                                    <td>{res.rwgst}</td>
                                    <td>{res.rgst}</td>
                                    <td>{res.receipt_no}</td>
                                    <td>{res.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={result.length + result2.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                    <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                    </button>
                    <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ReceiptTable