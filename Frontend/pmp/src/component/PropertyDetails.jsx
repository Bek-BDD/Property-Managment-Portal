import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { IconButton, Modal, Typography } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import ApplicationForm from './ApplicationForm';
import { computeStyles } from '@popperjs/core';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
    
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const PropertyDetails=(props)=>{ 
    const {open, hideDetail,fullWidth,property} = props; 
    const [openApply,setOpenApply]=useState(false);

    const showApply=()=>{
        setOpenApply(true);
    }
    const hideApply=()=>{
        setOpenApply(false)
    }

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
    if(property.imageUrls.length>0){
         pictures = property.imageUrls;
          bannerimage=property.imageUrls[0]
        }
     

     const [bannerimage, setBannerimage]=useState(pictures[0])
     
     const [maxWidth, setMaxWidth] = useState('xl');

       return (
     <>
        {
            <Dialog
                onClose={hideDetail}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
            >
                <DialogTitle id="customized-dialog-title" onClose={hideDetail}>
                {property.name}
                </DialogTitle>
                <DialogContent dividers>
                <div className="card-container mid-container">
                    <div className=" fr3">
                    <div className="banner">
                        <img src={bannerimage} alt="Front View" />
                    </div>
                    <div className="card-container">
                        {pictures.map((picture) => {
                        return (
                            <CardContent className="img-cards">
                            <img
                                src={picture}
                                alt=""
                                onClick={(e) => {
                                setBannerimage(e.target.src);
                                }}
                            />
                            </CardContent>
                        );
                        })}
                    </div>
                    </div>
                    <div className="fr1">
                    <div className="top-bar">
                        <div className="mg-10">
                        <CardActions>
                            <IconButton>
                            <img
                                src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
                                alt=""
                            />
                            </IconButton>
                        </CardActions>
                        </div>
                        <div className="mg-10">
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites" onClick={heart}>
                            {liked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderOutlinedIcon />
                            )}
                            </IconButton>
                        </CardActions>
                        </div>
                    </div>
                    <div className="hr-line"></div>

                    <div className="text-card">
                        <Typography variant="h5" component="h5">
                        {property.name}
                        </Typography>
                        {/* <label htmlFor="">`${property.address.street}`+`${property.address.city}` + `${property.address.state}`+`${property.address.zip}`</label> */}

                        <div className="mg-10">
                        <div className="top-bar ">
                            <div className="action-button">
                            <Button variant="outlined" onClick={()=>{showApply()}}>Request to Apply</Button>
                            </div>
                            <div className="action-button">
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                <FavoriteBorderOutlinedIcon />
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
                            <Typography variant="h6">${property.price}.00</Typography>

                            <Typography variant="body2">
                                {property.numberOfRoom} Rooms | 1-2 Bath | {property.area}sqft
                            </Typography>
                            </div>
                        </CardContent>
                        <div className="hr-lin3"></div>
                        <CardContent>
                            <div className="container ">
                            <div className="properties">
                                <Typography variant="h6">Type:</Typography>
                                <Typography variant="h6">Availablity:</Typography>
                                <Typography variant="h6">Date Posted:</Typography>
                            </div>
                            <div className="values">
                                <Typography variant="h6">{property.type}</Typography>
                                <Typography variant="h6">{property.status ? "Available": "Not Available"}</Typography>
                                {/* <Typography variant="h6">{property.datePosted}</Typography> */}
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    </div>

                    <div className="text-card">
                        <h3>Description</h3>
                        <p>
                        {property.description}
                        </p>
                    </div>
                    <div className="text-card bottom">
                        <img
                        src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
                        alt="Banner"
                        />
                    </div>
                    </div>
                </div>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={hideDetail} color="primary">
                    Close
                </Button>
                </DialogActions>
            </Dialog>
       }
       <ApplicationForm
       show={openApply}
       hide={hideApply}
       maxWidth={maxWidth} 
       fullWidth={fullWidth} 
       />
     </>
   );

}
export default PropertyDetails;