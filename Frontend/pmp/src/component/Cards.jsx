import MyCard from './MyCard'
import '../App.css'

export default function (props) {
    return (
        <div className='card-container' style={{marginTop: 30}}>
            {
                props.value.map(obj => <MyCard key={obj.id} value={obj}/>)
            }
        </div>
    )
}