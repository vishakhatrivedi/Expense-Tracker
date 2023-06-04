import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  let expensesContent = <p>No expenses found</p>;
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">There is no entry for this year!</p>
  }
  return <ul className="expenses-list">
    {expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
    }
  </ul>
}
export default ExpensesList;
