import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import { CSVLink } from 'react-csv';
import { useLocation } from "react-router-dom";
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function InventoryTable() {

    const location = useLocation();
    const { tower } = location.state;

    let PageSize = 20;

    const [currentPage, setCurrentPage] = useState(1);

    const [result, setResult] = useState([]);

    const getData = () => {

        if (tower != null) {
            return Api.get('/inventory/' + "'" + (tower) + "'").then(result => {
                const res = result.data;
                return setResult(res);
            })
        } else {
            return Api.get('/inventory/').then(result => {
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
        if (tower != null) {
            pdf.save((tower) + '-Tower Inventory Report.pdf');
        } else {
            pdf.save('Tower Inventory Report.pdf');
        }
    };

    return (

        <React.Fragment>
            <div className="row" ref={printRef}>
                <div >
                    <h3 className="mt-3 text-dark"><b><u><center>{tower} Tower Inventory Report</center></u></b></h3>

                    <CSVLink data={result} filename="Inventory Report" className="btn btn-success mb-3" style={{ color: "#000" }}>
                        Export {tower} Tower Inventory Report
                    </CSVLink>

                    <table className="table-bordered text-black">
                        <thead>
                            <tr className="table2" style={{ backgroundColor: "#0078AA" }}>
                                <th>Unit Type</th>
                                <th>Unit No.</th>
                                <th>Tower</th>
                                <th>Area Sq. Ft.</th>
                                <th>Booked/Empty</th>
                            </tr>
                        </thead>
                        <tbody className="table2">
                            {currentTableData.map((res) =>

                                <tr className="table2" style={{ backgroundColor: "#FFFDD0" }}>
                                    <td>{res.unit_type}</td>
                                    <td>{res.unit_no}</td>
                                    <td>{res.tower}</td>
                                    <td>{res.area_sqft}</td>
                                    <td>{res.param}</td>
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

export default InventoryTable