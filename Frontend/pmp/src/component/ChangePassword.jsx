import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { userActions } from './Redux/UserSlice';
import axios from 'axios';
import { useState,useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function() {
const [ verify,setVerify]= useState(false);
    useEffect(()=>{
        const queryParams = new URLSearchParams(window.location.search)
        const token = queryParams.get("token")
        axios.get(`http://localhost:9090/reset_pwd?token=${token}`)
             .then((response)=>{
                setVerify(true);
             })
        
    },[])


  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    changePassword(data);
  };
  const changePassword = (data)=>{
    const newPass = {
        password : data.get('password'),
        email : localStorage.getItem('resetPwd')
    }

      axios.post("http://localhost:9090/uaa/changePassword",newPass)
            .then((response)=>{
                localStorage.setItem("loggedUser",JSON.stringify(response.data))
                 navigate("/customer")
             });
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#304EF2" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {isValid ? validInput : inValidInput}

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
          <Avatar sx={{ m: 1, bgcolor: '#304EF2' }}>
            <LockOutlinedIcon />
          </Avatar>
         
          <Typography component="h1" variant="h5">
                  Change Password
          </Typography>
          { (verify) ? 
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="new Password"
              name="password"
              //autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirm Password"
              type="confirmpassword"
              id="confirmpassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm Password
            </Button>
          </Box> :<div> Invalid token </div> }

        </Box>
      </Container>
    </ThemeProvider>
    
  );
}
}
