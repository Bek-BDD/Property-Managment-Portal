import * as React from 'react';
import {DataGrid}  from '@mui/x-data-grid';
import {BottomNavigation, BottomNavigationAction, Fab} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAddAltOutlined';
import {useEffect, useState} from "react";
import {instance} from '../../index';

import UserActions from './UserActions';
import EditUser from "./EditUser";
import {blue, grey, red, yellow} from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";



export default function DataTable(){

    const [userData,setUserData]=useState([]);

    const [value, setValue]=useState(0);

    const [rowSelected,setRowSelected]=useState(null);



    const columns = [

        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'Photo', headerName: 'Image',width: 80 },
        { field: 'lastname', headerName: 'Last name', width: 100},
        { field: 'firstname', headerName: 'First name', width: 100 },

        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            width: 130,
            valueGetter: (params) =>
                `${params.row.firstname || ''} ${params.row.lastname || ''}`,
        },
        { field: 'email', headerName: 'Email', width: 150 ,  editable: true },

        { field: 'password', headerName: 'Password',width: 160 },


        { field: 'deleted', headerName: 'Status',width: 130 , type:'boolean' ,editable:'true'

        },

        { field: 'Action', headerName: 'Activate',width: 120 , type:'actions' ,
            renderCell:(theRow)=>(<UserActions{...{theRow}}/>
            ),

        },

        { field: 'Edit', headerName: 'Edit',width: 120 , type:'button' ,
            renderCell:(theRow)=>(<EditUser {...{rowSelected}}></EditUser>
            ),

        },

        { field: 'Delete', headerName: 'Delete',width: 90 , type:'button' ,
            renderCell:(theRow)=>(<Fab
                    sx={{
                        width: 40,
                        height: 40,
                        bgcolor: red[700],
                        '&:hover': { bgcolor: red[900]},
                    }}
                    color="secondary" aria-label="delete">
                    <EditIcon type={'loading'} onClick={handleDeletion}/>
                </Fab>
            ),

        },

    ];



    const getUserData=async ()=>{

        const data=await instance.get('/users')
        setUserData(data.data);

    }



    function handleDeletion() {


        rowSelected.forEach((row=>{

            const conformation= window.confirm("Delete User "+row);
        }))



    }






    useEffect(() => {

        getUserData()
            .then(r => console.log(' axios request getUserData() successful'))
            .catch(e=>console.log("Exception thrown by axios request getUserData() "));

    },[]);



    return (

        <div style={{ height: 600, width: '100%' }}>



            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction label="Add User" icon={<PersonAddIcon />} />

            </BottomNavigation>



            <DataGrid



                rows={userData}
                columns={columns}
                pageSize={10}
                getRowId={row => row.id}
                rowsPerPageOptions={[5,10,15]}
                autoPageSize={true}

                checkboxSelection
                rowSelection='single'
                experimentalFeatures={{ newEditingApi: true }}


                sx={{

                    bgcolor: blue[15],
                    marginLeft:20
                }}

                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = userData.filter((userData) =>
                        selectedIDs.has(userData.id.toString())
                    );
                    console.log(selectedIDs);
                    setRowSelected(selectedIDs);

                }}
                getRowSpacing={params =>( {
                    top:params.isFirstVisible ? 0:5,
                    bottom:params.isFirstVisible? 0:5,

                })}

                onCellEditCommit={para => setRowSelected(para.id)}
            />


        </div>
    );
}
;

