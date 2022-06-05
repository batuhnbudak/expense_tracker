import "./Expenses.css";
import Card from "../ui/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList year={filteredYear} expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
