import {
    Avatar,
    Box,
    Button, Fab,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import {orange, yellow} from "@mui/material/colors";
import {instance} from "../../index";

export default function (props) {



    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const updatedUser = {
            ...userState,
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            address: {
                state: data.get("state"),
                city: data.get("city"),
                zip: data.get("zip"),
                street: data.get("address"),
            },
        };

        instance
            .put("/users/" + userState.id, updatedUser)
            .then((response) => {
                console.log(response.data)
                window.alert('updated')
                window.location.reload(false);
                setUserState(updatedUser);

            })
            .catch((err) => console.log(err));
    }


    const user = props.theRow.row


  const [userState, setUserState] = useState({...user});

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
        <Avatar sx={{ m: 1, bgcolor: "#304EF2" }}>
          <Fab
              sx={{
                  width: 40,
                  height: 40,
                  bgcolor: yellow[700],
                  '&:hover': { bgcolor: yellow[900] },
              }}
              color="secondary" aria-label="edit">

          <EditIcon />
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
        sx={{ marginTop: 3 }}
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
>

          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                defaultValue={userState.address.street}
                id="address"
                name="address"
                label="Address line "
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={userState.address.city}
                id="city"
                name="city"
                label="City"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={userState.address.state}
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={userState.address.zip}
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
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
         Save
        </Button>
        </Box>
      </Box>
    </div>
  );
}
