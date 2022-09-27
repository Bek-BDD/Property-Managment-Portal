import * as React from 'react';
import {DataGrid}  from '@mui/x-data-grid';
import {BottomNavigation, BottomNavigationAction, Box, Fab} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAddAltOutlined';
import {useEffect, useState} from "react";
import {instance} from '../../index';

import UserActions from './UserActions';
import EditUser from "./EditUser";
import {blue, red} from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import Signup from "../Signup";
import {Navigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Widgets from "./Widgets";



export default function DataTable(){

    const [userData,setUserData]=useState([]);

    const [value, setValue]=useState(0);

    const [rowSelected,setRowSelected]=useState(null);

    let [userSelected,setUserSelected]=useState(null);


    let [addUser,setaddUser]=useState(false);


    const columns = [

        { field: 'id', headerName: 'Id', width: 50 },
        { field: 'Photo', headerName: 'Image',width: 80,
            renderCell: (theRow) => (<Avatar>


                </Avatar>
            ),
        },
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



        { field: 'Action', headerName: 'Activate',width: 120 , type:'actions' ,
            renderCell:(theRow)=>(<UserActions{...{theRow}}/>
            ),

        },

        { field: 'Edit', headerName: 'Edit',width: 120 , type:'button' ,
            renderCell:(theRow)=>(<EditUser {...{rowSelected}}></EditUser>
            ),

        },

        { field: 'Delete', headerName: 'Delete',width: 90 , type:'button' ,
            renderCell:(theRow)=>(
                    <DeleteIcon type={'loading'} onClick={handleDeletion}/>
                
            ),

        },

    ];



    const getUserData=async ()=>{

        const data=await instance.get('/users')
        setUserData(data.data);

    }



    function handleDeletion() {


        if(rowSelected!=null){

            rowSelected.forEach((row=>{

             const conformation= window.confirm("Delete User "+row);

             if (conformation){

                 instance.delete('/users/'+row)
                 window.location.reload(false);
             }



            }))

        }



    }






    useEffect(() => {

        getUserData()
            .then(r => console.log(' axios request getUserData() successful'))
            .catch(e=>console.log("Exception thrown by axios request getUserData() "));

    },[]);



    return (

        <Box className='dark' style={{ height: "600px", width: '100%' }}>           


            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction onClick={()=>{

                    console.log('in here')
                    setaddUser(true)}} label="Add User" icon={<PersonAddIcon />} />

                {addUser && (
                    <Navigate to="/signup" replace={true} />
                )}
            </BottomNavigation>



            <DataGrid style={{color:"white", border:"none"}}



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


        </Box>
    );
}
;

