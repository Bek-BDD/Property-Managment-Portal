import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import "../App.css";
import { Box } from "@mui/material";
export default function () {
  return (
    //#f0f8ff
    <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      marginTop:30,
      backgroundColor:"rgba(0,117,223,0.1)",
    }}
  >
    <div>
      <div className="card-container">
        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Zedagem"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975646074_jpg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zedagem Demelash" secondary="Dev Ops" />
      </ListItem>
        </div>

        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Bereket"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645768_jpeg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bereket Dentamo" secondary="Springboot " />
      </ListItem>
         
        </div>

        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Abdu"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975645545_jpeg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Abdu Eado" secondary="Database " />
      </ListItem>
        </div>

        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Zelalem"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1663975644694_jpeg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zelalem Tsege" secondary="React " />
      </ListItem>
            
         
        </div>
        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Hiwot"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134331536_jpg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hiwot Reta" secondary="Security " />
      </ListItem>
      </div>


        <div>
        <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Dawit"
            src="https://propertymanagmentportal.s3.us-east-2.amazonaws.com/1664134386359_jpg"
            sx={{ width: 56, height: 56, marginRight:1}} 
          ></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Dawit " secondary="R " />
      </ListItem>
        
        </div>
      </div>

      <div>
        <div style={{ marginTop: 50 }}>
          <img
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            type="image/svg+xml"
            alt="Zillow logo"
            height="25"
            width="120"
            className="image-center"
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <img
            src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
            type="image/svg+xml"
            alt="Footer art"
            height="160"
            // width="1200"
            className="image-center"
          />
        </div>
      </div>
    </div>
    </Box>
  );
}
