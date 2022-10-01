import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useEffect } from "react";
import { instance } from "../index";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";
import Alert from '@mui/material/Alert';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OpenEditPropertyDialog = (props) => {
  
  const { handleClose, maxWidth, fullWidth, open, property } = props;
  let prevInfo = property;
  const [propertyData, setPropertyData] = useState({
    name: null,
    type: null,
    area: null,
    numberOfRoom: null,
    price: null,
    description: null,
    country: null,
    city: null,
    state: null,
    street_number: null,
    zip_code: null,
  });
  let [Files, setFiles] = useState([]);
  const [IsSuccess, setIsSuccess] = useState(false);
  const [IsError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let handleFileChange = (e) => {
    
    for(let i = 0; i < e.target.files.length; i++){
      Files.push({

        Attachement: e.target.files[i]

      })
    }

  }

  const handleSubmit = () => {
    
    setIsError(false);
    setIsSuccess(false);
    let formData = new FormData();
    
    if (propertyData !== undefined) {
      
      formData.append("id", prevInfo.id);
      formData.append(
        "name",
        propertyData.name ? propertyData.name : prevInfo.name
      );
      formData.append(
        "area",
        propertyData.area ? propertyData.area : prevInfo.area
      );
      formData.append(
        "price",
        propertyData.price ? propertyData.price : prevInfo.price
      );
      formData.append(
        "description",
        propertyData.description
          ? propertyData.description
          : prevInfo.description
      );
      formData.append(
        "type",
        propertyData.type ? propertyData.type : prevInfo.type
      );
      formData.append(
        "numberOfRoom",
        propertyData.numberOfRoom
          ? propertyData.numberOfRoom
          : prevInfo.numberOfRoom
      );

      formData.append("address_id", prevInfo.address?.id);
      formData.append("city", propertyData.city ? propertyData.city : prevInfo.address?.city);
      formData.append("state", propertyData.state ? propertyData.state : prevInfo.address?.state);
      formData.append("street_number", propertyData.street_number ? propertyData.street_number : prevInfo.address?.street);
      formData.append("zip_code", propertyData.zip_code ? propertyData.zip_code : prevInfo.address?.zip);


    }
    console.log(prevInfo.imageUrls);

    if(Files.length > 0)  {
      for(var i = 0; i < Files.length; i++){
        formData.append('images', Files[i].Attachement);
     }
    }else{
         formData.append("imageUrls", prevInfo.imageUrls);
    }


    const config = {
      // Authorization: 'Bearer ' + UserToken?.jwt,
      headers: { "content-type": "multipart/form-data" },
    };
    let url = "http://localhost:8080/properties";

    axios
      .put(url, formData, config)
      .then((response) => {

        setIsSuccess(true);
        console.log(response);
        setTimeout(function(){
          handleClose();
       }, 3000);
        

      })
      .catch((error) => {
        
        setIsError(true);
      });
  };
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Your Property
        </DialogTitle>
        <DialogContent dividers>
        {IsSuccess && (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
               <Alert severity="success">Your Property successfully Updated! Thank you!</Alert>
                </Typography>
              </React.Fragment>
            )
            }
            {IsError &&  <Alert severity="error">Something went wrong! Please try Again.</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                {" "}
                
                  <Grid container spacing={5} className="p-5">
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
               
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                {" "}
                <Grid container spacing={4} className="p-5">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="country"
                      variant="standard"
                      defaultValue={prevInfo ? prevInfo.address?.country : "Country"}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                      defaultValue={prevInfo ? prevInfo.address?.city : null}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="state"
                      name="state"
                      label="State"
                      fullWidth
                      autoComplete="state"
                      variant="standard"
                      defaultValue={prevInfo ? prevInfo.address?.state : null}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="zipCode"
                      name="zip_code"
                      label="Zip Code"
                      type="number"
                      fullWidth
                      autoComplete="zipCode"
                      variant="standard"
                      defaultValue={prevInfo ? prevInfo.address?.zip : null}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="streetNumber"
                      name="street_number"
                      label="Street Number"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                      defaultValue={prevInfo ? prevInfo.address?.street : null}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* <Grid item xs={12} sm={12}>
                    <label for="formFileMultiple" class="form-label text-left">
                      Property Images
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                      onChange={(e) => handleFileChange(e)}
                    />
                  </Grid> */}
                </Grid>
              </Item>
            </Grid>
          </Grid>
          <div className="col text-center mt-4">
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
  Update Property
</Button>
    </div>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default OpenEditPropertyDialog;
