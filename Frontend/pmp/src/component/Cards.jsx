import MyCard from "./MyCard";
import "../App.css";
export default function (props) {

  let favSet = new Set();
  if (props.fav != null) {
    props.fav.map((o) => {
      favSet.add(o.id);
    });
  }
  
  return (
    <div className="card-container" style={{ marginTop: 30 }}>
      {props.value.map((obj) => {
        return <MyCard key={obj.id} value={obj} state={favSet.has(obj.id)} />;
      })}
    </div>
  );
}
