import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./Customer/ProfileDropDown";
import '../App.css'

export default function(){
    const navigator = useNavigate();
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    const token = localStorage.getItem('tokens');
    const role = user ? user.role[0].role:null;

    return(
        <div className="container">
            <Link to={"/"}>
            <div>
            <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" type="image/svg+xml" alt="Zillow logo"  height="25" width="120"></img>
            </div>
            </Link>

            <div>
            {token && role == 'customer' ?  <Link to={"/viewApplication"}><Button variant="text">View Applications</Button></Link>:null}
            {token && role == 'customer' ?  <Link to={"/favourites"}><Button variant="text">Favorite</Button></Link>:null}
            {token && role == 'owner' ?  <Link to={"/customerapplications"}><Button variant="text">Manage Application</Button> </Link>:null}
            {token && role == 'owner' ? <Link to={"/properties"}> <Button variant="text">Manage property</Button> </Link>:null}
            {token && role == 'owner' ? <Link to={"/property-detail"}>  <Button variant="text">Property Details</Button> </Link>:null}
            {token && role == 'owner' ?  <Link to={"/create-property"} >  <Button variant="text">Create Property</Button> </Link>:null}
            {token ? <AccountMenu /> : <Link to={"/login"} >  <Button variant="text">Login</Button> </Link>}

            </div>
        
            
        </div>
    )
}