import React from 'react'
import { useEffect,useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import CustomerApplications from './CustomerApplications';
import Divider from '@mui/material/Divider';
import FeedbackIcon from '@mui/icons-material/Feedback';
import DescriptionIcon from '@mui/icons-material/Description';
function CustomerDashBoard() {
const [user,setUser] = useState();
const [isLoggedIn ,setIsLoggedIn] = useState(false);
useEffect(()=>{
    if(localStorage.getItem("tokens") != null)
        setIsLoggedIn(true)
},[])

const images = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80',
  'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
  'https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg',
  
];
  return (
    <div >
       
        <div style={{display : 'flex', justifyContent:'space-between'}}>
          <div style={{width:'20%' , marginTop : '40px' , borderRight : '2px black solid'}}>
          <List>
        {['Buy', 'Rent', 'Favourite', ,'Applications','Profile','FeedBack'].map((text, index) => (
          <>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === 'Favourite' ? <FavoriteIcon /> : text ==='Profile' ? <AccountBoxIcon /> : text === 'FeedBack' ? <FeedbackIcon />  :
                text ==='Applications' ? <DescriptionIcon /> : <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
          </div>
          <div style={{width : '76%'}}>   
          <CustomerApplications />
          </div>
      
    </div>
    </div>
  )
}

export default CustomerDashBoard
