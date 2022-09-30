
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react'

function ApplicationDetail(props) {

    console.log("this",props)
    const [open, setOpen] = useState(false);
  
    return (
      
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {props.row.property.name}
          </TableCell>
          <TableCell align="right">{props.row.property.address.city}</TableCell>
          <TableCell align="right">{props.row.property.numberOfRoom}</TableCell>
          <TableCell align="right">{props.row.property.type}</TableCell>
          <TableCell align="right">{props.row.property.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Submission Date</TableCell>
                      <TableCell >Owner Name</TableCell>
                      <TableCell align="right">price ($)</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow key={props.row.property.id}>
                        <TableCell >
                        <img
                                   style={{width: '120px', height: '30%'}}
                                   src='https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'
                            />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {props.date}
                        </TableCell>
                        <TableCell align="right">{props.row.property.price}</TableCell>
                        <TableCell align="right">
                        <DeleteIcon />
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  export default ApplicationDetail;