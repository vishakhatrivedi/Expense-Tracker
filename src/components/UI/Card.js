import "./Card.css";
import React from "react"; 
function Card(props) {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
    //children is a reserved name. value is always the content between the opening and closing tags of the custom component
  );
}
export default Card;
