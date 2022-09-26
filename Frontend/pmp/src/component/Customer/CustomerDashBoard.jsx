import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

import CustomerHeader from './CustomerHeader';
import CollapsibleTable from './CustomerApplications';
import CustomerApplications from './CustomerApplications';
function CustomerDashBoard() {
const [user,setUser] = useState();
const [isLoggedIn ,setIsLoggedIn] = useState(false);
useEffect(()=>{
    if(localStorage.getItem("tokens") != null)
        setIsLoggedIn(true)
},[])

  return (
    <div>
        {isLoggedIn &&
        <div>
            <CustomerApplications />
        </div>
        }
    </div>
  )
}

export default CustomerDashBoard
