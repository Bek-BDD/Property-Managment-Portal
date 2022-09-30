import MyCard from './MyCard'
import '../App.css'
export default function(props){

    return(
        <div className='card-container' style={{marginTop:30}}>
            {
                props.value.map(obj => {
                    let isFound = false;
                    if(props.fav != null){
                        props.fav.map(o => {
                            if(o.id === obj.id) {
                                isFound = true;
                            } 
                        })
                    }

                   return (<MyCard key={obj.id} value={obj} state={isFound}/>)
                })
            }
        </div>
    )
}