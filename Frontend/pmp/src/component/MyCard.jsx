import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandMore } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "../App.css";

export default function RecipeReviewCard(props) {
  debugger;
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function heart() {
    console.log("heart");
    if (liked) {
      // send to database liked
    } else {
      // remove from datatbase
    }
    setLiked(!liked)
  }
  function showDetails(id) {
    console.log(id);
  }

  return (
    <div>
      <Card
        sx={{ maxWidth: 360 }}
        className="card-hover"
      >
        <div onClick={() => showDetails(props.value.id)}>
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
            alt={"Paella dish"}
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
          </CardContent>
        </div>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={heart}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
