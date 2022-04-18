import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";
import React, { useState } from "react";
import ExpensesArray from "../ExpensesArray/ExpensesArray";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function ExpenseList(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const [filteredItems, setFilteredItems] = useState([...props.expenses]);

  const filterChangeHandler = (selectedYear) => {
    setYearSelected(selectedYear);
    setFilteredItems(
      props.expenses.filter((item) => item.date.getFullYear() == selectedYear)
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={yearSelected}
          onFilterChanged={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesArray items={filteredItems} />
      </Card>
    </div>
  );
}

export default ExpenseList;
