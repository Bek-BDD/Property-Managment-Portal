import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";

import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../App.css'
import {useEffect, useState} from "react";
import axios from "axios";

export default function PropertyCard() {



    const initialState = [
        {
            "id": 1,
            "name": "Safe Harbor",
            "price": 143.0,
            "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "area": 76.0,
            "numberOfRoom": 1,
            "type": "Sell",
            "datePosted": null,
            "status": false,
            "imageUrls": [],
            "address": null
        }
    ]

    const [selectedPropertyId, setSelectedPropertyId] = useState(1);
    const [expanded, setExpanded] = React.useState(false);
    const [liked, setLiked] = React.useState(false)


    const [PropertyData, setPropertyData] = useState(initialState);

    const property_id = initialState[0].id;
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // function DeleteButton(props) {
    //
    //             console.log(props[0].id);
    //             return (
    //                 <Stack direction="row" spacing={2}>
    //                     <Button variant="contained" endIcon={<SendIcon/>}>
    //                         Edit
    //                     </Button>
    //                     <Button variant="outlined" startIcon={<DeleteIcon/>} onClick={DeleteProperty} {...props}>
    //                         Delete
    //                     </Button>
    //                 </Stack>
    //         )
    // }

    const getProperty = async () => {
        const result = await axios.get('http://localhost:8080/properties');
        setPropertyData(result.data);


    }



    // console.log(PropertyData.id);

    function showDetails() {
        // console.log("click");
    }


    const [propertyId, setPropertyId] = useState(1);


    const DeleteProperty = async (id, e) => {

        // const delete_id = props.;
        // console.log(props.id);
        const result = await axios.delete("http://localhost:8080/properties/"+`${id}`);
        // getProperty();
    }

    useEffect(() => {
        DeleteProperty();
        getProperty();
    }, [PropertyData])

    // useEffect(() => {
    //     getProperty();
    // }, [])
    // console.log(property_id);

    return (

        PropertyData.map((item) => {
                // console.log(item.name);
                // const del_id = item.id;
                // console.log(del_id);
            return(

            <Card sx={{maxWidth: 360}} onClick={showDetails} className="card-hover" {...item}>
            <CardHeader
            avatar={
            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
            R
            </Avatar>
        }
            title = {item.name}
            subheader={item.description}
            />

            <CardMedia
            component="img"
            height="194"
            image="https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg"
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">

                {PropertyData.description}

            </Typography>
            </CardContent>
            <CardActions disableSpacing {...item}>

                {/*<DeleteButton {...item}/>*/}
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon/>}>
                        Edit
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon/>} onClick = { (e) => DeleteProperty(item.id, e)}>
                        Delete
                    </Button>
                </Stack>

        {/*<EditProperty/>*/}

            </CardActions>

            </Card>
            )
        })

    );
}
