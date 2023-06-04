import "./ExpenseItem.css"; //to make the app aware ki css file bhi use hui hai
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("new title"); // this makes the component function execute again
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
  //only one root element allowed: matlab only one main div, p etc.
}

export default ExpenseItem;
