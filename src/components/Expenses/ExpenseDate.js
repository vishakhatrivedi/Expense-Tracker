import './ExpenseDate.css';
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  //this needs the DATE prop from expenseitem.js file

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}
export default ExpenseDate;

/*weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric", */
