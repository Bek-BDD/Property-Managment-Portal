import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'

export default function(){
    const navigator = useNavigate();

    return(
        <div className="container">
            <Link to={"/"}>
            <div>
            <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" type="image/svg+xml" alt="Zillow logo"  height="25" width="120"></img>
            </div>
            </Link>

            <div>
            <Link to={"/editaccount"}>  <Button variant="text">Edit Account</Button> </Link>
            <Link to={"/changePassword"}>  <Button variant="text">Change Password</Button> </Link>
            <Link to={"/"}> <Button variant="text">Favorite list</Button> </Link>
            <Link to={"/"}> <Button variant="text">Manage property</Button> </Link>
            <Link to={"/apply"}>  <Button variant="text">View Applications</Button> </Link>
            <Link to={"/login"} >  <Button variant="text">Login</Button> </Link>
          
            </div>
        
            
        </div>
    )
}