import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { instance } from "../index";
import { useState} from "react";
import PropertyDetails from "./PropertyDetails";



export default function RecipeReviewCard(props) {
  const [liked, setLiked] = React.useState(props.state);
  const[openDetail, setOpenDetail]=useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('lg');
    const [property, setProperty] = useState({})
    const [visited,setVisited]=useState(false);

    
  const navigator = useNavigate();
  const address =
    props.value.address.street +
    ", " +
    props.value.address.city +
    ", " +
    props.value.address.state +
    " " +
    props.value.address.zip;

  function heart(id) {
    const propertyId = id;
    let userId = JSON.parse(localStorage.getItem("loggedUser"));
    userId = userId?.id;
    
    if (localStorage.getItem("tokens") == null) {
      navigator("/login");
    } else {
      if (!liked) {
        // send to database liked
        instance
          .post('/favorites?user_id='+userId+'&'+'property_id='+propertyId)
          .then((response) => {
            setLiked(true);
          })
          .catch((err) => {
            console.log(err);
            setLiked(false);
          });
      } else {
        console.log("remove");
        // remove from datatbase
        instance
          .delete('/favorites?user_id='+userId+'&&'+'property_id='+propertyId)
          .then((response) => {
            setLiked(false);
            if(props.remove) {
              props.remove(id);
            }
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
            setLiked(true);
          });
      }
    }
  }
  const showDetails = (id) =>{
    instance.get(`/properties/${id}`)
     .then(response => {
      
      setProperty(response.data)
      
      setVisited(true)
      setOpenDetail(true)
    })}
    const hideDetails=()=>{
        setOpenDetail(false)
        setVisited(false)
    }

  return (
    <>{ 
      <Card sx={{ maxWidth: 360 }} className="card-hover" >
        <div onClick={() => {showDetails(props.value.id)}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {props.value.name[0]}
              </Avatar>
            }
            title={props.value.name}
            subheader={props.value.datePosted}
          />
          <CardMedia
            component="img"
            height="194"
            image={props.value.imageUrls[0]?.url}
            alt={props.value.name}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {props.value.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Number of rooms : {props.value.numberOfRoom}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Price : {props.value.price}$
            </Typography>
            <Typography variant="body2" >
              {address}
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => heart(props.value.id)}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
        </CardActions>
      </Card>
      }

      {
        visited && <PropertyDetails 
        open={openDetail}
        property={property}
        hideDetail={hideDetails} 
        maxWidth={maxWidth} 
        fullWidth={fullWidth}
        />
      }      
      
    </>
  );
}
