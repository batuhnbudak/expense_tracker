import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.expenses.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
