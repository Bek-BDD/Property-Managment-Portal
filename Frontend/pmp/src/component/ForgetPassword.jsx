import * as React from "react";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Link, useNavigate} from "react-router-dom";
import {instance} from "../index";
import {validateEmail} from "../validation";

const theme = createTheme();

export default function () {
    const navigator = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const [submited, setSubmited] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (validateEmail(data.get("email"))) {
            setSubmited(true)

            instance.post('/uaa/resetpassword', {
                email: data.get("email")
            })
                .then(response => console.log(response.data))
                .catch(err => console.log(err))


        } else {
            setIsValid(false)
        }
    };

    const card = (
        <Card sx={{mt: 10, mr: 20, m: 20}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Check email for reset Link
                </Typography>

                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    An email has been sent by the administrative email address on file.
                    Check the inbox for to reset your password, and click the reset link.
                </Typography>
            </CardContent>
        </Card>
    );


    const inValidInput = (
        <TextField
            error
            helperText="Incorrect email format."
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
        />
    );
    const validInput = (
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
    );


    return (
        <div>
            {submited ? card : (<ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline/>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: "#304EF2"}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Reset Password
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{mt: 1}}
                            >
                                {isValid ? validInput : inValidInput}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Submit
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Go back
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>

            )}
        </div>

    );
}
