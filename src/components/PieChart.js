import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import Api from "./Api";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const PieChart = (props) => {

    const [chart, setChart] = useState([])

    const getChart = async () => {

        if (props.value != null) {
            return Api.get('/unitscount/' + "'" + (props.value) + "'").then(result => {
                const res = result.data;
                return setChart(res);
            })
        } else {
            return Api.get('/unitscount').then(result => {
                const res = result.data;
                return setChart(res);
            })
        }

    }

    useEffect(() => {
        getChart()
    }, [])

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

    var options = {
        maintainAspectRatio: false,
        legend: {
            fontSize: 26
        },
    }

    return (
        <div className="body">
            <Pie
                data={data}
                height={400}
                options={options}
                plugins={[ChartDataLabels]}
            />
        </div>
    );
}

export default PieChart;

