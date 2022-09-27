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

import { Bar, Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {useEffect, useState} from "react";
import axios from "axios";
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


export default function AdminCharts(){
    const initialState = [];

    const [PropertyData, setPropertyData] = useState(initialState);

    const getProperty = async () => {
        const result = await axios.get('http://localhost:8080/properties');
        setPropertyData(result.data);
    }

    useEffect(() => {
        getProperty();
    }, []);

    console.log(PropertyData);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Customers chart',
            },
        },
    };

    const labels = ['Iowa', 'Minnesota', 'Texas', 'Seattle', 'Virginia', 'Washington', 'Portland'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ]
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: [
                    'rgb(0, 204, 255)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ]
            },
        ],
    };


    const data2 = {
        labels: ['Iowa', 'Minnesota', 'Texas', 'Seattle', 'Virginia', 'Washington', 'Portland', 'Ohio', 'Tennesse', 'Harar', 'Gahi', 'Debi'],
        datasets: [
            {
                label: 'Number of Customers',
                data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
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
            <div style={{marginTop:30}} sx={{minWidth: 560}}>
                <Pie data={data} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    width:"700px"
                }}/>
            </div>
            <div style={{marginTop:30}}>
                <Bar options={options} data={data2} height="500px"
                     width="600px" />
            </div>
        </div>

    )
}
