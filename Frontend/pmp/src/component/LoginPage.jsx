import  React,{useState,useEffect} from 'react';
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


const theme = createTheme();

export default function() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)

useEffect(()=>{
  if(localStorage.getItem("tokens") != null){setIsLoggedIn(true)
}},[])
  const state = useSelector((state)=> state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    loginRequest(data);

  };
  const loginRequest = (data)=>{
    const loginRequestObj = {
      "email" : data.get('email'),
      "password" : data.get('password')
    }
      axios.post("http://localhost:9090/uaa/login",loginRequestObj)
            .then((response)=>{
                  localStorage.setItem("tokens",JSON.stringify(response.data))
                  axios.get(`http://localhost:9090/users/${data.get('email')}`,{
                   headers : {
                       'Authorization' : 'Bearer ' +JSON.parse(localStorage.getItem('tokens')).jwtToken
                     }
                    })
                  .then((response)=> {
                      localStorage.setItem("loggedUser",JSON.stringify(response.data))
                      })
                 dispatch(userActions.login("selam"));
                 window.location.reload(false);
                 navigate("/")
             });
  }

  return (
    <>
    { (!isLoggedIn) ? 
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#304EF2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link to="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    :<>{navigate("/")}</> }
    </>
  );
}