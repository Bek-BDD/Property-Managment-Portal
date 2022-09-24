import MyCard from './MyCard'
import '../App.css'
export default function(){
    return(
        <div className='card-container' style={{marginTop:30}}>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            <MyCard/>
        </div>
    )
}