import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OpenEditPropertyDialog from "./OpenEditPropertyDialog";
import { instance } from "../index";
import PropertyDetails from "./PropertyDetails";

export default function PropertyCard() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [property, setProperty] = useState();
  const [maxWidth, setMaxWidth] = useState("lg");
  const [openDetail, setOpenDetail] = useState(false);
  const [PropertyData, setPropertyData] = useState([]);
  const [visited, setVisited] = useState(false);
  const handleClickOpenForEdit = (id) => {
    const selectedTender = PropertyData.find((clicked) => clicked.id === id);
    setProperty(selectedTender);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // debugger;
  var user = JSON.parse(localStorage.getItem("loggedUser"));

  console.log(user.id);

  const getProperty = () => {
    axios
      .get(`http://localhost:8080/properties/owner/${user.id}`)
      .then((res) => setPropertyData(res.data));
  };
  const handleClickOpen = (id) => {
    instance
      .get(`/properties/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(true);
  };

  const showDetails = (item) => {
    setProperty(item);
    console.log(property);
    setVisited(true);
    setOpenDetail(true);
  };
  const hideDetails = () => {
    setOpenDetail(false);
    setVisited(false);
  };

  const DeleteProperty = async (id, e) => {
    const result = await instance.delete("/properties/" + `${id}`);
    window.location.reload(false);
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <>
      {PropertyData.map((item) => (
        <Card sx={{ maxWidth: 360 }} className="card-hover" key={item.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {item.name[0]}
              </Avatar>
            }
            title={item.name}
            subheader={item.datePosted}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.imageUrls[0]?.url}
            onClick={() => {
              showDetails(item);
            }}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Number of rooms : {item.numberOfRoom}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price : {item.price}$
            </Typography>
            <Typography variant="body2">
              {item.address.street +
                ", " +
                item.address.city +
                ", " +
                item.address.state +
                " " +
                item.address.zip}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => handleClickOpenForEdit(item.id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={(e) => DeleteProperty(item.id, e)}
              >
                Delete
              </Button>
            </Stack>
          </CardActions>
        </Card>
      ))}

      <OpenEditPropertyDialog
        open={open}
        handleClose={handleClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        property={property}
      />

      {visited && (
        <PropertyDetails
          open={openDetail}
          property={property}
          hideDetail={hideDetails}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
        />
      )}
    </>
  );
}
