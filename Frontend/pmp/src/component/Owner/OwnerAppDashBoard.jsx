import { Button, Table, TableCell, TableRow,TextField } from '@mui/material';
import React from 'react'
import EnhancedTable from './OwnerApplications'
import {instance } from '../../index'
import { useState,useEffect } from 'react';
import {FormGroup,FormControlLabel,Checkbox} from '@mui/material'
import axios from 'axios'
import { Filter } from '@mui/icons-material';
function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ];
function OwnerAppDashBoard() {
    const[selectedProperty,setSelectedProperty] = useState([])
    const[data,setData]= useState([])
    useEffect(()=>{
        
            instance.get("/ownersx/15")
            .then((response)=>{
                setData(response.data);
    })},[])
    function x(para){
        console.log('this is para',para)
        console.log('this is selected',selectedProperty)
        console.log( para.property.name === selectedProperty.name)
        return para.property.name === selectedProperty.name
    }
    useEffect(()=>{
        setData(data.filter(x))
        console.log(data.property)
    },[selectedProperty])

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
                <TextField id="standard-basic" label="Location" variant="standard" />    
            </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                <TextField id="standard-basic" label="Property" variant="standard" />    
                </TableCell>
            </TableRow>
           </Table>
        </div>
         <div style={{width : '85%'}}>
        <EnhancedTable rows={data}/>
        </div>
    </div>
  )
}

export default OwnerAppDashBoard
