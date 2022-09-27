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

    const [stateData, setStateData] = useState(initialState);


    const getProperty = async () => {
        const result = await axios.get('http://localhost:8080/properties');
        setPropertyData(result.data);
        setStateData(result.data.address.state);
    }


    useEffect(() => {
        getProperty();
    }, []);

    // console.log(PropertyData);
    // console.log(stateData);
    // console.log(PropertyData[0].address);

    PropertyData.forEach((item)=>{
        console.log(item.address.state);
    })


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



    const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

    const count = {};

    for (let index = 0; index < PropertyData.length; index++) {
        const element = PropertyData[index].address.state;

        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    const labels = ['Iowa', 'California', 'Ohio', 'Michigan', 'Tennessee'];





    console.log(count); // 👉️ {a: 3, b: 1, c: 2}
    const dt = [count.Iowa, count.California, count.Ohio, count.Michigan, count.Tennessee];

    console.log(dt);
    // const [count] = [];

    // let c = 0;

    // labels.filter(state=>PropertyData.filter(prop=>prop.address.state==state));
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dt,
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
                data: dt,
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
        labels: ['Iowa', 'California', 'Ohio', 'Michigan', 'Tennessee'],
        datasets: [
            {
                label: 'Customers',
                data: dt,
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
            <div style={{ width: '50%',margin:"auto", marginTop:50, justifyContent:"center"}}>
                <Bar options={options} data={data2} height="500px"
                      />
            </div>
        </div>

    )
}
