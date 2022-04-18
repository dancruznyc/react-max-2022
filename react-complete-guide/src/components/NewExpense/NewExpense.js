import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const [showFormState, setShowFormState] = useState(false);
  function showForm() {
    setShowFormState(true);
  }
  return (
    <div className="new-expense">
      {!showFormState ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setShowFormState={setShowFormState}
        />
      )}
    </div>
  );
};

export default NewExpense;
