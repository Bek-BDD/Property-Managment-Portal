import {InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Cards from "./Cards";


export default function () {
  return (
    
<div>
    <div className="splashContainer">
      <div className="search-center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
          }}
        >
          <InputBase
            onChange={(e) => console.log(e.target.value)}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter an Address, City, State or ZipCode to search"
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
    <Cards/>
    </div>
  );
}
