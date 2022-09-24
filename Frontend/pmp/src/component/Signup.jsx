import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../validation";

const theme = createTheme();

export default function () {
  const [userType, setUserType] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const[userInput, setUserInput] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    userType:""
  })

  const inValidInput = (<TextField
  error
  helperText="Incorrect email format."
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
/>)
const validInput =( <TextField
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
/>)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // console.log(event);

    if (validateEmail(data.get("email"))) {
      setValidEmail(true)
      console.log({
        email: data.get("email"),
        password: data.get("password"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        file: data.get("file"),
        userType: userType,
      });
    } else {
      setValidEmail(false)
    }
  };

  function handleChange(event) {
    setUserType(event.target.value);
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
              {validEmail ? validInput : inValidInput}
                {/* <TextField
                  error
                  helperText="Incorrect email format."
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: 400 }}>
                  <InputLabel id="select-user-type-label">User Type</InputLabel>
                  <Select
                    labelId="select-user-type-label"
                    id="user-type"
                    value={userType}
                    name="userType"
                    onChange={handleChange}
                    input={<OutlinedInput label="User Type" />}
                    MenuProps={MenuProps}
                  >
                    <MenuItem value="OWNER">OWNER</MenuItem>
                    <MenuItem value="CUSTOMER">CUSTOMER</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mt: 2 }}
            >
              Upload File
              <input type="file" hidden name="file" />
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
