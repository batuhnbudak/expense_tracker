import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import Card from "../ui/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(year) {
    console.log(year);
    setFilteredYear(year);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}

export default ExpenseItemList;
