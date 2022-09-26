import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Fab, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';

const PropertyDetails=()=>{

    const [liked,setLiked]=useState(false);


     function heart(){
    if(liked){
        // send to database liked
    }
    else{
        // remove from datatbase 
    }
    setLiked(!liked);
   
  }


    const pictures = ["https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/ZG_Brand_LA_0322_Harvard-_ExtFront_1504_4936px_NO-PPL_desktopImg2x-scaled.webp","https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg","https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg","https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg","https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg","https://thumbs.dreamstime.com/b/housing-estate-link-house-2660912.jpg"]
     const [bannerimage, setBannerimage]=useState(pictures[0])
    return(
        <div className='card-container mid-container'>
            <div className=" fr3">
                <div className="banner">
                    <img src={bannerimage} alt="Front View" />
                </div>
                <div className="card-container">                                      
                    {pictures.map((picture)=>{
                    return(
                            <CardContent className='img-cards' >
                                <img src={picture} alt="" />
                            </CardContent>                       
                        )})
                    }
                </div>                 
            </div>
            <div className="fr1">
                <div className="top-bar">
                        <div className='mg-10'>
                             <CardActions>
                                <IconButton>
                                    <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
                                </IconButton>
                                 
                            </CardActions>
                           
                        </div>
                        <div className='mg-10'>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={heart}>
                                    {liked ? <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/> }
                                </IconButton>                        
                            </CardActions>
                        </div>                       
                    </div>
                    <div className='hr-line'></div>

                    <div className="text-card">
                       <Typography variant="h5" component="h5">
                                     Old Town II
                        </Typography>
                        <label htmlFor="">1000N Fairfield, IA 52557</label>
                        
                            <div className= "mg-10">
                                <div className="top-bar ">
                                    <div className='action-button'>
                                        <Button variant="outlined">Request to Apply</Button>
                                    </div>
                                    <div className='action-button'>
                                        <Button variant="contained" color="primary"><FavoriteBorderOutlinedIcon/>
                                            Add to Favorites
                                         </Button>
                                    </div>                                
                                </div>                                 
                            </div>                 
                    </div>
                    <div className="hr-line"></div>
                    <div className="mg-10">
                        <Card>
                            <CardContent>
                                <div className="center">
                                <Typography variant="h6">    
                                    $1300 - $1500                            
                                </Typography>
                                
                                    <Typography variant="body2">    
                                        4Rooms | 1-2 Bath | 115 sqft                          
                                    </Typography>
                                </div>
                                
                            </CardContent>
                            <div className="hr-lin3"></div>
                            <CardContent>
                                <div className="container ">
                                    <div className="properties">
                                        <Typography variant="h6" >    
                                         Type:                             
                                        </Typography>
                                        <Typography variant="h6">    
                                                Availablity:                             
                                        </Typography>
                                        <Typography variant="h6">    
                                                Date Posted:                             
                                        </Typography>
                                    </div>
                                    <div className="values">
                                        <Typography variant="h6" >    
                                         Rent                             
                                        </Typography>
                                        <Typography variant="h6">    
                                                Available                             
                                        </Typography>
                                        <Typography variant="h6">    
                                                09/11/2022                             
                                        </Typography>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>      
                    </div>
               
                    <div className="text-card">
                        <h3>Description</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Totam voluptatum ipsa quam velit magni quaerat voluptatem 
                            ipsam nostrum enim, aut asperiores mollitia modi maiores
                            similique provident optio ab odio doloremque?
                        </p>
                    </div>

                </div>
               
            </div>           

       
    );

}
export default PropertyDetails;