import { Button } from "@mui/material";
import React from 'react'
import {Link} from 'react-router-dom';
import CollapsibleTable from "./CustomerApplications";
import AccountMenu from "./ProfileDropDown";
function OwnerHeader() {
  return (
        
            <div className="customerHeader">
                
                <div>
                    <Link to={"/"}> <Button variant="text">Rent</Button> </Link>
                    <Link to={"/"}> <Button variant="text">Sell</Button> </Link>
                    <Link to={"/"}>  <Button variant="text">Agent Finder</Button> </Link>
                </div>
                    <Link to={"/"}>  <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" /></Link> 
                <div className="">
                    <Link to={"/ownerapplications"}><Button variant="text">Recieved Application</Button> </Link>
                    
                    <Link > <Button variant="text"><AccountMenu /></Button> </Link>
            
                </div>
            </div> 
    )
}
        
export default OwnerHeader