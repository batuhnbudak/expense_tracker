import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card.js";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);

  function onClickHandler() {
    setTitle("updated");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenses.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
      <button onClick={onClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
