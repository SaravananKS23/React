import React, { useEffect } from "react";
import "./card.css";

function Card(props) {

useEffect(() => {
return () => {
// console.log("Removed Cards >>", props.title)
}
},[]);

  return (
    <div className="card-wrapper">
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <img src={props.image} alt="images" />
      <button
        onClick={(event) => {
          // alert("You clicked (" + props.title + " : " + props.desc + ")");
          props.onAdd({title: props.title})
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
