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

import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {useEffect, useState} from "react";
import axios from "axios";
import "hammerjs";
import Widgets from "./Widgets";
import BarChart from "./BarChart";
import AdminPage from './AdminPage'


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

    const [PropertyData, setPropertyData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [ownerData, setOwnerData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [stateData, setStateData] = useState([]);


    const getProperty = async () => {
        const result = await axios.get('http://localhost:8080/properties');
        setPropertyData(result.data);
        console.log("poperty data",PropertyData);
        // setStateData(result.data.address.state);
    }



    const getOwners = async () => {
        const result = await axios.get('http://localhost:8080/owners');
        setOwnerData(result.data);
    }

    const getCustomers = async () => {
        const result = await axios.get('http://localhost:8080/customers');
        setCustomerData(result.data);
    }

    const getUsers = async () => {
        const result = await axios.get('http://localhost:8080/users');
        setUserData(result.data);
    }

    useEffect(() => {
        getOwners();
        getProperty();
        getCustomers();
        getUsers();
    }, []);


    const datas = {
        userData:userData.length,
        ownerData: ownerData.length,
        customerData: customerData.length,
        PropertyData: PropertyData.length
    }

    console.log(PropertyData.length);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Properties chart by State',
            },
        },
    };


    const count = {};

    console.log('this is state data',stateData);
    for (let index = 0; index < PropertyData.length; index++) {
        const element = PropertyData[index].address.state;

        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    const labels = ['Iowa', 'California', 'Ohio', 'Michigan', 'Tennessee'];

    // const dt = [count.Iowa, count.California, count.Ohio, count.Michigan, count.Tennessee];

    const labels3 = Object.keys(count);
    // console.log(labels3);
    const dt3 = Object.values(count);
    // console.log(dt3);


    const data = {
        labels: labels3,
        datasets: [
            {
                label: 'Dataset 1',
                data: dt3,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                ]
            },
        ],
    };


    const data2 = {
        labels: labels3,
        datasets: [
            {
                label: 'Properties',
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
        <div className='dark-border' >
            <Widgets data = {datas }/>
            <div style={{marginTop:30}} sx={{minWidth: 560}} className="pie">
                <Doughnut data={data} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    width:"700px"
                }}/>
            </div>

            <div className="barArea">
                <div style={{margin:"auto", justifyContent:"center"}} className="bar">
                    <Bar options={options} data={data2} height="400px"
                    />
                </div>
                <div className="area">
                    <BarChart data = { userData}/>
                </div>


            </div>



            <AdminPage />

        </div>

    )
}
