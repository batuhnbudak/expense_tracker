import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
