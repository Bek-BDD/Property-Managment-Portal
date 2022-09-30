import {InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Cards from "./Cards";
import {useEffect, useState} from "react";
import {instance} from "../index"


export default function () {
    const [propertyState, setPropertyState] = useState([])
    const [searchState, setSearchState] = useState();

    useEffect(() => {

        instance.get('/properties')
            .then(response => setPropertyState(response.data))
            .catch(err => console.log(err))

    }, [])

    function search(e) {
        instance.post('/properties/search?keyword=' + searchState)
            .then(response => setPropertyState(response.data))
            .catch(err => console.log(err))


    }

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
                            onChange={(e) => setSearchState(e.target.value)}
                            sx={{ml: 1, flex: 1}}
                            placeholder="Enter an Address, City, State or ZipCode to search"
                            onSubmit={search}
                        />
                        <IconButton type="button" onClick={search} sx={{p: "10px"}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </div>
            </div>
            <Cards value={propertyState}/>
        </div>
    );
}
