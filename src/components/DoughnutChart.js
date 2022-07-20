import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import Api from "./Api";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChart = (props) => {

    const [chart, setChart] = useState([])

    const getChart = async () => {

        if (props.value != null) {
            return Api.get('/reportDR/' + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setChart(res);
            })
        } else {
            return Api.get('/reportDR').then(result => {
                const res = result.data;
                return setChart(res);
            })
        }

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
                'rgba(200, 102, 255, 0.5)',
                'rgba(150, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(200, 102, 255, 1)',
                'rgba(150, 159, 64, 1)'
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

