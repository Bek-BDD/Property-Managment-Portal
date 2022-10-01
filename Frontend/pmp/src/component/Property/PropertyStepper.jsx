import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressInformation from "./AddressInformation";
import PropertyInformation from "./PropertyInformation";
import ImageInformation from "./ImageInformation";
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import {instance} from '../../index'
const theme = createTheme();

export default function PropertyStepper(props) {
  debugger;
  const [IsSuccess, setIsSuccess] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const steps = ["Property Information", "Address Information", "Image"];
  const [activeStep, setActiveStep] = React.useState(0);

  const counter = useSelector((state) => state);
  let propertyInfo = counter.propertyInformation.data;
  let addressInfo = counter.addressInformation.data;
  let ImageLIst = counter.propertyImage.data;


  const handleSubmit = () => {
    debugger;
    console.log(ImageLIst);
    let formData = new FormData();
    
    if (propertyInfo !== undefined) {
      
      formData.append("owner_id", 6);
      formData.append("name", propertyInfo.name);
      formData.append("area", propertyInfo.area);
      formData.append("price", propertyInfo.price);
      formData.append("description", propertyInfo.description);
      formData.append("type", propertyInfo.type);
      formData.append("numberOfRoom", propertyInfo.numberOfRoom);
    }

    if (addressInfo !== undefined) {
      formData.append("city", addressInfo.city);
      formData.append("state", addressInfo.state);
      formData.append("street_number", addressInfo.street_number);
      formData.append("zip_code", addressInfo.zip_code);
    }

    if (ImageLIst !== undefined) {
      // var count = Object.keys(ImageLIst).length;
      for(var i = 0; i < ImageLIst.length; i++){
          formData.append('images', ImageLIst[i].Attachement);
      }
    }

    const config = {
      // Authorization: 'Bearer ' + UserToken?.jwt,
      headers: { "content-type": "multipart/form-data" },
    };
    let url = "/properties";

    instance
      .post(url, formData, config)
      .then((response) => {
        debugger;
        setIsSuccess(true);
        console.log(response);
        setTimeout(function(){
          window.location.href = '/';
       }, 3000);
      })
      .catch((error) => {
        debugger;
        console.log(error);
        setIsError(true);
      });
  };

  const handleNext = (newValues) => {
    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PropertyInformation />;
      case 1:
        return <AddressInformation />;
      case 2:
        return <ImageInformation />;
      default:
        throw new Error("Mis-step!");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Host Property
          </Typography>
         
         
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
       
          <React.Fragment>
            {IsError &&  <Alert severity="error">Something went wrong! Please try Again.</Alert>}
            {IsSuccess === true ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
               <Alert severity="success">Your Property successfully submited! Thank you!</Alert>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Save Property
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}