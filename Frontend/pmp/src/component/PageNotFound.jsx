import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';


const primary = "rgba(0,117,223,0.5)"

export default function () {
    const navigator = useNavigate()

    function goBack() {
        navigator("/")
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: primary,
            }}
        >
            <Typography variant="h1" style={{color: 'white'}}>
                404
            </Typography>
            <Typography variant="h6" style={{color: 'white'}}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={goBack}>Back Home</Button>
        </Box>
    );
}