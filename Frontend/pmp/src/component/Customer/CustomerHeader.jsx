import { Button } from "@mui/material";
import React from 'react'
import {Link} from 'react-router-dom';

function CustomerHeader() {
  return (
        
            <div className="customerHeader">
                <div>
            <Link to={"/editaccount"}>  <Button variant="text">Buy</Button> </Link>
            <Link to={"/changePassword"}>  <Button variant="text">Sell</Button> </Link>
            <Link to={"/"}> <Button variant="text">Rent</Button> </Link>
            <Link to={"/"}> <Button variant="text">Home Loan</Button> </Link>
            <Link to={"/"}>  <Button variant="text">Agent Finder</Button> </Link>
                </div>
            <Link to={"/"}>  <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" /></Link> 
                <div className="">
            <Link to={"/login"} >  <Button variant="text">Manage Rentals</Button> </Link>
            <Link to={"/login"} >  <Button variant="text">Advertise</Button> </Link>
            <Link to={"/login"} >  <Button variant="text">Help</Button> </Link>
                </div>
            </div> 
    )
}
        
export default CustomerHeader