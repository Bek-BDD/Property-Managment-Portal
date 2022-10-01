import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import ApplicationDetail from './ApplicationDetails';
import { useEffect } from 'react';
import axios from 'axios';
import {instance} from '../../index';
export default function CustomerApplications() {
const [loggedUser,setLoggedUser] = useState([])
const [appData,setAppData] = useState([])
useEffect(()=>{
  const id = JSON.parse(localStorage.getItem('loggedUser')).id
  instance().get(`/application/customers/${id}`)
        .then((response)=> {
            console.log(response.data)
            setAppData(response.data)
        })

  setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
},[])
  ////////////////
  ////  Api call to beki application
  //////////////

   
  return (
    <>  
    <h3>Pending Applications</h3>  
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Property Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Number of Rooms</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appData.map((row) => (
            <ApplicationDetail key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
