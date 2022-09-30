import { Button, Table, TableCell, TableRow,TextField } from '@mui/material';
import React from 'react'
import EnhancedTable from './OwnerApplications'
import {instance } from '../../index'
import { useState,useEffect } from 'react';
import {FormGroup,FormControlLabel,Checkbox} from '@mui/material'
import axios from 'axios'
import { Filter } from '@mui/icons-material';
import OwnerApplication from './OwnerApplications';

function OwnerAppDashBoard() {

    const[selectedProperty,setSelectedProperty] = useState([])
    const[data,setData]= useState([])
    const[input,setInput] = useState({
      location : null,
      submissionDate : null

})
    useEffect(()=>{
        
            instance.get("/ownersx/15")
            .then((response)=>{
                setData(response.data);
    })},[])
    function x(para){
        return para.property.name === selectedProperty.name
    }
    useEffect(()=>{
        setData(data.filter(x))
        console.log(data.property)
    },[selectedProperty])

    const changeInput = (e) => {
        setInput({...input,[e.target.name] : e.target.value})
    }
    const filterData =()=>{
          if(input.location != null){
            setData(data.filter((property)=> property.property.address.state === input.location))
          }else if(input.submissionDate != null){
            setData(data.filter((property)=> property.date == input.submissionDate))
          }
    }
    
  return (
    <div style={{display : 'flex', justifyContent:'space-between'}}>
        <div className='sideBar'>
            Filter      <Button float="right" onClick={()=>{window.location.reload(false)}}>FetchAll</Button>
           <Table>
            <TableRow>
                  <FormGroup>
                  <div  style={{display : 'flex' }}>
                {data.map((da) =>{
                     return(
                    <FormControlLabel id={da.property.id} control={<Checkbox  onChange={()=>setSelectedProperty(da.property)}/>} label={da.property.name} />
                     )

                })}
          </div>
                </FormGroup>
            </TableRow>
            <TableRow>
                <TableCell>
                <TextField id="standard-basic" label="Location" variant="standard" name="location" onChange={changeInput} />    
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                <TextField id="standard-basic" label="Submission Date" variant="standard" name="submissionDate" onChange={changeInput}/>    
                </TableCell>
            </TableRow>
            <button style={{float : 'right'}} onClick={filterData}>Filter</button>
           </Table>
        </div>
         <div style={{width : '85%'}}>
        <OwnerApplication rows={data}/>
        </div>
    </div>
  )
}

export default OwnerAppDashBoard
