import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../index";
import { useState } from "react";
import { Alert, AlertTitle } from "@mui/material";

const theme = createTheme();

export default function () {
  const navigator = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [successState, setSuccessState] = useState(false)

  const inValidInput = (
    <TextField
      error
      helperText="Old password does not match"
      margin="normal"
      required
      fullWidth
      id="oldPassword"
      label="Old Password"
      name="oldPassword"
    />
  );
  const validInput = (
    <TextField
      margin="normal"
      required
      fullWidth
      id="oldPassword"
      label="Old Password"
      name="oldPassword"
    />
  );
  const alert = ( <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  You have successfuly changed password 
</Alert>)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // fetch api check if old password matches
    // true store new password
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
            Change password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {isValid ? validInput : inValidInput}

            <TextField
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
            />
            {successState ? alert : null }
           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
