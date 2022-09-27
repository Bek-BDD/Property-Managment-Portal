import { useEffect, useState } from "react"
import { instance } from "../index";
import MyCard from './MyCard'

export default function(){
    const[propertyState,setPropertyState] = useState([])
    let userId = JSON.parse(localStorage.getItem("loggedUser"));
    userId = userId?.id;
    useEffect(()=>{
        instance.get('http://localhost:8080/favorites/'+userId)
        .then(response => setPropertyState(response.data))
        .catch(err=> console.log(err))
    },[])

    return(
        <div className='card-container' style={{marginTop:30}}>
        {
          propertyState.map(obj => <MyCard key={obj.id} value={obj} state={true}/>)
        }
    </div>
    )
}