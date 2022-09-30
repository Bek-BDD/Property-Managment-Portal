import CardActions from '@mui/material/CardActions';
import {Button,Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { instance } from '../index';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



const handleSubmit = (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);  
    // data.append("message")
    // data.append("fullname")
    // data.append("phone")

    console.log(data)
    
    //   instance
    //     .post("/uaa/application/",data)
    //     .then((response) => console.log(response.data))
    //     .catch((err) => console.log(err));
 
  };


const ApplicationForm =(props)=>{
  const  {show, hide,fullWidth}=props;
    const [liked,setLiked]=useState(false);
    const [maxWidth, setMaxWidth]=useState("sm");
    

     function heart(){
    if(liked){
        // send to database liked
    }
    else{
        // remove from datatbase 
    }
    setLiked(!liked);
   
  }


 
   
    return(
         
            <Dialog
                
                onClose={hide}
                aria-labelledby="customized-dialog-title"
                open={show}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                
            >
                <Box component="form" onSubmit={handleSubmit} >  
                <DialogContent dividers> 
                      
                    <div className="text-card">
                        <div className="top-bar">
                            <div className='mg-10'>
                                <Typography variant="h5" component="h5">
                                            Ready to apply ?
                                </Typography>
                                <div className='mg-t-b-30'>
                                <Typography variant="body2">
                                            Enter your contact details, and we'll
                                            let the rental manager know you want to submit an application.
                                            If they're interested, they'll contact you with next steps.
                                </Typography>
                                </div>                                                    
                            </div>                                              
                        </div>
                    </div>
                    <div className="text-card">
                        <div className="mg-10">
                            <div className="mg-10 ">
                            <TextField
                            id="outlined-multiline-flexible"
                            name="message"
                            label="Enter Your Message"
                            multiline
                            maxRows={4} 
                            fullWidth
                                                
                            />

                        </div>
                        <div className="mg-10">
                            <TextField
                            id="outlined-multiline-flexible"
                            label="Your First and Last Name"
                            name="fullname"
                            maxRows={1} 
                            fullWidth                       
                            />

                        </div>
                        <div className="mg-10">
                            <TextField
                            id="outlined-multiline-flexible"
                            label="phone"
                            name="Phone"
                            maxRows={1} 
                            fullWidth                       
                            />

                        </div>
                        <CardActions >
                            <Button type='submit' className='fullwidth' variant="contained">Send Request</Button>
                        </CardActions>
                    <div className="mg-t-b-30 mg-bt-30">
                        <Typography variant="body2">
                                You agree to Zillow's Terms of Use and Privacy Policy. 
                                By choosing to contact a property, you also agree that Zillow Group, 
                                landlords, and property managers may call or text you about any inquiries
                                you submit through our services, which may involve use of automated means
                                and prerecorded/artificial voices. You don't need to consent as a condition
                                of renting any property, or buying any other goods or services. Message/data rates may apply.
                            </Typography>

                    </div>       
                        </div>                                                                                                  </div>

               

                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={hide} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Box>  
            </Dialog>
        
        
         
    );
   

}


export default ApplicationForm;