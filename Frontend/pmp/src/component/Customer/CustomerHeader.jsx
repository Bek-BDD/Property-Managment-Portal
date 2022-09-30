import { Button } from "@mui/material";
import React from 'react'
import {Link} from 'react-router-dom';
import CollapsibleTable from "./CustomerApplications";
import AccountMenu from "./ProfileDropDown";
function CustomerHeader() {
  return (
        
            <div className="customerHeader">
                
                <div>
                    <Link to={"/"}> <Button variant="text">Rent</Button> </Link>
                    <Link to={"/"}> <Button variant="text">Buy</Button> </Link>
                    <Link to={"/"}>  <Button variant="text">Agent Finder</Button> </Link>
                </div>
                    <Link to={"/"}>  <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" /></Link> 
                <div className="">
                    <Link to={"/customerapplications"}><Button variant="text">Sent Applications</Button> </Link>
                    <Link to={"/Favourites"}><Button variant="text">Favorite</Button></Link>
                    <AccountMenu />
                </div>
               
            </div> 
    )
}
        
export default CustomerHeader