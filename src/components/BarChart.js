import React, { useEffect, useState } from "react";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js';
import { Bar } from "react-chartjs-2";
import Api from "./Api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
)

const BarChart = () => {

    const [chart, setChart] = useState([])

    const getChart = async () =>{

        return Api.get('/unittypecount').then(result => {
            const res = result.data;
            return setChart(res);
        })

    }
    
    useEffect(() => {
        getChart()
    }, [])

    console.log('chart', chart)

    var data = {
        labels: chart.map(x => x.unit_type),
        datasets: [{
            label: `${chart.length} Unit Types Available`,
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
        }]
    }

    var options= {
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
            <div>
                <Bar
                data={data}
                height={400}
                options={options}
                />
            </div>
        );
}

export default BarChart;

