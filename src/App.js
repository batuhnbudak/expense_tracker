import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [enteredExpenses, setEnteredExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
    expenses.push(expense);
    setEnteredExpenses(expenses);
    console.log(enteredExpenses);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <ExpenseItemList expenses={enteredExpenses} />
    </div>
  );
}

export default App;
