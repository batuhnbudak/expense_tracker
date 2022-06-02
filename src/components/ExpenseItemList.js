import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
function ExpenseItemList() {
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

  return (
    <div>
      <ul className="ul">
        {expenses.map((item, index) => {
          return (
            <li key={expenses[index].id}>{<ExpenseItem expenses={item} />}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseItemList;
