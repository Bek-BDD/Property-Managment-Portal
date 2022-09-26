import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
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


export default function Customer() {
const [loggedUser,setLoggedUser] = useState([])
useEffect(()=>{
  setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
},[])
  ////////////////
  ////  Api call to beki application
  //////////////

    const rows = [{

        name : 'Burger',
        calories : 140,
        fat : 58,
        carbs : 10,
        protein : 100,
        price : 145 ,
        history: [
          {
            date: '2020-01-05',
            customerId: '11091700',
            amount: 3,
          },
          {
            date: '2020-01-02',
            customerId: 'Anonymous',
            amount: 1,
          },
        ],
      },{

        name : 'Burger',
        calories : 140,
        fat : 58,
        carbs : 10,
        protein : 100,
        price : 145 ,
        history: [
          {
            date: '2020-01-05',
            customerId: '11091700',
            amount: 3,
          },
          {
            date: '2020-01-02',
            customerId: 'Anonymous',
            amount: 1,
          },
        ],
      }];
    console.log(rows)
  return (
    <TableContainer component={Paper} style={{marginTop : 150}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Property Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Number of Rooms</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <ApplicationDetail key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
