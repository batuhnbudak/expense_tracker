import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }

  function numberChangeHandler(event) {
    console.log(event.target.value);
    setEnteredNumber(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  function addExpenseHandler(event) {}
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={numberChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={addExpenseHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
