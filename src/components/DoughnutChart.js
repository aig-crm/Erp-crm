import React, { useEffect, useState } from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChart = () => {

    const [chart, setChart] = useState([])

    const getChart = async () =>{
        const response = await fetch('https://3cb3-2401-4900-1c5e-d332-401c-1182-840a-b049.in.ngrok.io/api/reportDR');
        setChart(await response.json());

    }
    
    useEffect(() => {
        getChart()
    }, [])

    console.log('chart', chart)

    var data = {
        labels: chart.map(x => x.params),
        datasets: [{
            label: `${chart.length} Unit Types Available`,
            data: chart.map(x => x.count),
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
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
                <Doughnut
                data={data}
                height={400}
                options={options}
                />
            </div>
        );
}

export default DoughnutChart;

