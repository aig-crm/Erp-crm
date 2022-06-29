import React, { useEffect, useState } from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const PieChart = () => {

    const [chart, setChart] = useState([])

    const getChart = async () =>{
        const response = await fetch('https://6705-2401-4900-1c5f-11bd-a580-15e1-4fad-d5c7.in.ngrok.io/api/unitscount');
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
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
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
                <Pie
                data={data}
                height={400}
                options={options}
                />
            </div>
        );
}

export default PieChart;

