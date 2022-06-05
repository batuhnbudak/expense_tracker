import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // Good enough for demo
    };
    props.addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
