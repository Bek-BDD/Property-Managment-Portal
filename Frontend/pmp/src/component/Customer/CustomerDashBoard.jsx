import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'
import CustomerHeader from './CustomerHeader';
function CustomerDashBoard() {
const [user,setUser] = useState();
// setUser(JSON.parse(localStorage.getItem('loggedUser')))
const state = useSelector((state)=> state.user);

  return (
    <div>
        {state.user}
    </div>
  )
}

export default CustomerDashBoard
