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
import {render} from "@testing-library/react";

export default function PropertyCard() {
debugger


    const initialState = [
        // {
        //     "id": 1,
        //     "name": "Safe Harbor",
        //     "price": 143.0,
        //     "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        //     "area": 76.0,
        //     "numberOfRoom": 1,
        //     "type": "Sell",
        //     "datePosted": null,
        //     "status": false,
        //     "imageUrls": [],
        //     "address": null
        // }
    ]

    const [PropertyData, setPropertyData] = useState(initialState);

    const getProperty = async () => {
        const result = await axios.get('http://localhost:8080/properties');
        setPropertyData(result.data);
    }

    function showDetails() {
        // console.log("click");
    }

    const DeleteProperty = async (id, e) => {

        const result = await axios.delete("http://localhost:8080/properties/"+`${id}`);
        window.location.reload(false);
    }

    useEffect(() => {
        getProperty();
    
    }, [])


    return (

            PropertyData.map((item) => {

                return (

                    <Card sx={{maxWidth: 360}} onClick={showDetails} className="card-hover" {...item} key={item.id}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title={item.name}
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
                                <Button variant="outlined" startIcon={<DeleteIcon/>}
                                        onClick={(e) => DeleteProperty(item.id, e)}>
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
