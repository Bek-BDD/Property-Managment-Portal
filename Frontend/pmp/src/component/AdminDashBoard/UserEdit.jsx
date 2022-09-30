import {Avatar, Box, Button, Fab, Grid, TextField,} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";
import {yellow} from "@mui/material/colors";

export default function (props) {
    const [userState, setUserState] = useState({
        firstname: props,
        lastname: "Shiferaw",
        email: "zedshif123@gmail.com",
        address: "100N 4th St",
        city: "Fairfield",
        zipcode: "52557",
        state: "Iowa",
    });

    function handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log(data.get('city'));
    }

    return (
        <div>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: "#304EF2"}}>
                    <Fab
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: yellow[700],
                            '&:hover': {bgcolor: yellow[900]},
                        }}
                        color="secondary" aria-label="edit">

                        <EditIcon/>
                    </Fab>

                </Avatar>

            </Box>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
            >
                <Grid
                    container
                    columnGap={3}
                    justifyContent="center"
                    sx={{marginTop: 3}}
                >
                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    defaultValue={userState.firstname}
                                    autoComplete="given-name"
                                    name="firstname"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    defaultValue={userState.lastname}
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastname"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    defaultValue={userState.email}
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="outlined" component="label" fullWidth>
                                    Upload Image
                                    <input type="file" hidden name="images"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    defaultValue={userState.address}
                                    id="address"
                                    name="address"
                                    label="Address line "
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    defaultValue={userState.city}
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    defaultValue={userState.state}
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    defaultValue={userState.zipcode}
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}}>
                        Save
                    </Button>
                </Box>
            </Box>
        </div>
    );
}
