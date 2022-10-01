import react, {useEffect, useState} from 'react';
import {Box, Fab} from "@mui/material";
import {Check, Save} from "@mui/icons-material";
import {green, grey, red} from "@mui/material/colors";
import {CircularProgress} from "@mui/joy";
import axios from 'axios';
import {element} from "prop-types";
import {instance} from "../../index";

export default function (props) {


    let [flag,setflag]=useState(props.theRow.row.active);




    return  (
        <Box
            sx={{
                m: 1,
                position: 'relative',
            }}
        >
            {props.theRow.row.active ? (
                <Fab
                    color="warning"
                    sx={{
                        width: 40,
                        height: 40,
                        bgcolor: green[500],
                        '&:hover': { bgcolor: green[700] }? {bgcolor: [red]}:{bgcolor: green[700]},
                    }}
                    onClick={ ()=> {


                        instance().get("/users/deactivate/"+props.theRow.id).then(()=>{

                            window.alert("deactivate")

                        }).catch((e)=>{

                            console.log(e)

                        })



                        setflag(flag === false)
                    }}
                    disabled={!flag}
                >
                    <Check />
                </Fab>
            ) : (
                <Fab
                    color="warning"
                    sx={{
                        width: 40,
                        height: 40,
                        bgcolor: green[500],
                        '&:hover': { bgcolor: green[700] }? {bgcolor: [red]}:{bgcolor: green[700]},
                    }}
                    onClick={ ()=> {
                        setflag(flag === false)

                    }}
                    disabled={!flag}
                >
                    <Check />
                </Fab>
            )}
            { props.theRow.row.active && (
                <CircularProgress
                    sx={{
                        color: grey[500],
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        zIndex: 1,
                    }}
                    onClick={ ()=> {


                        instance().get("/users/activate/"+props.theRow.id)
                            .then((r)=>{

                                window.alert('activate')
                            } ).catch((e)=>{
                            console.log(e)
                        })

                        setflag(flag === false)

                    }}
                />
            )}
        </Box>
    );


}