import React, { useEffect, useState } from "react";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js';
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
)

const BarChart = () => {

    const [chart, setChart] = useState([])

    const getChart = async () =>{
        const response = await fetch('https://3cb3-2401-4900-1c5e-d332-401c-1182-840a-b049.in.ngrok.io/api/unittypecount');
        setChart(await response.json());

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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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

