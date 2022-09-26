import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState, forwardRef } from 'react';
import  {propertyInformation}  from '../../Redux/createPropertySlice'
import { useSelector, useDispatch } from 'react-redux'
const PropertyInformation = forwardRef((props, ref) => { 
  const dispatch = useDispatch()

  debugger
  const counter = useSelector((state) => state);
  let prevInfo = counter.propertyInformation.data;
  const [propertyData, setPropertyData] = useState({
    name: prevInfo ? prevInfo.name : null,
    type: prevInfo ? prevInfo.type : null,
    area: prevInfo ? prevInfo.area : null,
    numberOfRoom: prevInfo ? prevInfo.numberOfRoom : null,
    price: prevInfo ? prevInfo.price : null,
    description: prevInfo ? prevInfo.description : null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    dispatch(propertyInformation(propertyData));
    
  };

  const handleSubmit = () => {
    alert('hetre')

  };



  return (
    <React.Fragment>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="name"
            label="Property Title"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.name : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="type"
            label="Property Type"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.type : null}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            
            name="area"
            label="Area"
            type="number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.area : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="numberOfRoom"
            label="Number Of room"
            type="number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.numberOfRoom : null}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            
            name="price"
            label="Price"
            type="number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.price : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            name="capacity"
            label="Capacity"
            type="number"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.capacity : null}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
        
            name="description"
            label="Property Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={prevInfo ? prevInfo.description : null}
            onChange={handleChange}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
});

export default  PropertyInformation;