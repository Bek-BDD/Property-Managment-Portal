import * as React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, ArcElement,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import "hammerjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);


export default function BarChart(props){





    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Users Chart By State',
            },
        },
    };

    const count2 = {};

    // console.log(stateData);
    console.log(props.data);
    for (let index = 0; index < props.data.length; index++) {
        const element = props.data[index].address.state;

        if (count2[element]) {
            count2[element] += 1;
        } else {
            count2[element] = 1;
        }
    }
    const labels3 = Object.keys(count2);
    const dt3 = Object.values(count2);

    const data2 = {
        labels: labels3,
        datasets: [
            {
                label: 'Users',
                data: dt3,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0.7,
            },
        ],
    };

    return(
        <div>


            <div >
                <div style={{margin:"auto", justifyContent:"center", width:"100%", height:"1%"}}>
                    <Bar options={options} data={data2} height="200px"
                    />
                </div>

            </div>

        </div>

    )
}
