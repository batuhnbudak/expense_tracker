import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
function NewExpense(props) {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // Good enough for demo
    };
    props.addExpense(expenseData);
    setFormState(false);
  };

  const cancelHandler = () => {
    setFormState(false);
  };
  const addHandler = () => {
    setFormState(true);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        onSubmit={saveExpenseDataHandler}
        onCancel={cancelHandler}
        onAdd={addHandler}
        state={formState}
      />
    </div>
  );
}

export default NewExpense;
