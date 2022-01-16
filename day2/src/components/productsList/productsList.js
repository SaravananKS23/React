import React, {useState, useEffect} from "react";
import Card from "../card/card";
import "./productsList.css";
export default function ProductsList(props) {
const [val, setVal] = useState("");
useEffect(() =>{
  // console.log("ProductList >", val);
}, [val])

  if (!props.data) {
    return null;
  }

const onInputChange = (e) =>{
  setVal(e.target.value.toLowerCase());
}

  return (
    <div className="list-wrapper">
      <div className="list-product">
        <div className="title-section">
        <h2>
          {props.title}{" "}
          {props.subtitle ? <small>{props.subtitle}</small> : null}
        </h2>
        <input type="text" value={val} onChange={onInputChange}/>
        <span>Typed: {val}</span>
        </div>
        <button>View All</button>
      </div>
      <div>
        {props.data.map((item, index) => {
if(item.title.toLowerCase().includes(val)){
            return <Card
              key={index}
              title={item.title}
              desc={item.desc}
              image={item.image}
              onAdd={props.onAdd}
            />
}
          return null;
        })}
      </div>
    </div>
  );
}
