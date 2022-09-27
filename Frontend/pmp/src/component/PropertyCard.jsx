import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../App.css'
import {useEffect, useState} from "react";
import {instance} from "../index"
import PropertyDetails from "./PropertyDetails";

export default function PropertyCard() {
    const [open, setOpen] = useState(false);
    const[openDetail, setOpenDetail]=useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('lg');
    const [property, setProperty] = useState({})
    const [propid, setPropid]=useState(1)
    const [visited,setVisited]=useState(false);



    const handleClickOpen = (id) => {  
    instance.get(`/properties/${id}`)
        .then(response => {
        setProperty(response.data)      
        })
        .catch(err=> {
        debugger;
        console.log(err)
    })
    setOpen(true);    
    };
    const handleClose = () => {
      setOpen(false);

    };
    const showDetails = (id) =>{
    instance.get(`/properties/${id}`)
     .then(response => {
       console.log(response.data)
      setProperty(response.data)
      console.log(property)
      setVisited(true)
        setOpenDetail(true)
    })}
    const hideDetails=()=>{
        setOpenDetail(false)
        setVisited(false)
    }

    const initialState = []

    const [PropertyData, setPropertyData] = useState(initialState);

    const getProperty = async () => {
        const result = await instance.get('/properties');
        setPropertyData(result.data);
    }

    
    const DeleteProperty = async (id, e) => {

        const result = await instance.delete("/properties/"+`${id}`);
        window.location.reload(false);
    }

    useEffect(() => {
        getProperty();
    
    }, [])


    return (

          
                <>
                  {
                    PropertyData.map((item) => (
                        <Card sx={{maxWidth: 360}} onClick={()=>{showDetails(item.id)}} className="card-hover" key={item.id}>
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
                        <CardActions disableSpacing >

                            {/*<DeleteButton />*/}
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" endIcon={<SendIcon/>} onClick={() =>handleClickOpen(item.id)}>
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
                    ))
                  }
                  
                   { visited ?
                        <PropertyDetails 
                        open={openDetail}
                        property={property}
                        hideDetail={hideDetails} 
                        maxWidth={maxWidth} 
                        fullWidth={fullWidth}
                        /> : null
                   }
                                         

                   
                
                </>
                
            

        );
}
