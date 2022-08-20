import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from "react-chartjs-2";
import Api from "./Api";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
)

const BarChart = (props) => {

    const [chart, setChart] = useState([])
    const [chart2, setChart2] = useState([])

    const getChart = async () => {

        if (props.value != null) {
            return Api.get("/unittypecount/" + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setChart(res);
            })
        } else {
            return Api.get("/unittypecount").then(result => {
                const res = result.data;
                return setChart(res);
            })
        }

    }

    const getChart2 = async () => {

        if (props.value != null) {
            return Api.get("/unittypecount/" + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setChart2(res);
            })
        } else {
            return Api.get("/unittypecount").then(result => {
                const res = result.data;
                return setChart2(res);
            })
        }

    }

    useEffect(() => {
        getChart()
    }, [])

    useEffect(() => {
        getChart2()
    }, [])

    var data = {
        labels: chart.map(x => x.unit_type),
        datasets: [{
            label: `Unit Types Available`,
            data: chart.map(x => x.empty_units),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            label: `Unit Types Booked`,
            data: chart2.map(x => x.booked_units),
            backgroundColor: [
                'rgba(255,0,0, 0.5)',
                'rgba(11, 127, 171, 0.5)',
                'rgba(201,141,38, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,0,0, 1)',
                'rgba(11, 127, 171, 1)',
                'rgba(201,141,38, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            fontSize: 26
        }
    }

    return (
        <div className="body">
            <Bar
                data={data}
                height={400}
                options={options}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default BarChart;

