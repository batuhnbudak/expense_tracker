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
      <ul className="ul">
        {props.expenses.map((item, index) => {
          return (
            <li key={props.expenses[index].id}>
              {<ExpenseItem expenses={item} />}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default ExpenseItemList;
