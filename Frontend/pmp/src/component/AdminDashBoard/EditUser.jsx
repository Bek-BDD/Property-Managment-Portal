import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UserEdit from "./UserEdit";
import {Fab} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {yellow} from "@mui/material/colors";
import axios from "axios";
import {instance} from "../../index";
import {useEffect, useState} from "react";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));




const BootstrapDialogTitle = (props) => {

    const [userData,setUserData]=useState([]);

    const getUserData=async ()=>{

        const data=await instance.get('/users')
        setUserData(data.data);

    }

    useEffect(()=>{
        getUserData().then(r => console.log(' axios request getUserData() successful'))
            .catch(e=>console.log("Exception thrown by axios request getUserData() "));

    },[])


    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
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
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function (props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>

            
                <BorderColorRoundedIcon style={{coursor:"pointer"}}  onClick={handleClickOpen}/>
           
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

                </BootstrapDialogTitle>
                <DialogContent dividers>

                    <UserEdit {...props}/>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Done
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
