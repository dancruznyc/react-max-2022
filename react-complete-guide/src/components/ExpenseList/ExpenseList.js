import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";
import React, { useState } from "react";

function ExpenseList(props) {
  const [yearSelected, setYearSelected] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={yearSelected}
          onFilterChanged={filterChangeHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default ExpenseList;
