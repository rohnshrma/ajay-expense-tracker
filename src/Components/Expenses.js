import React from "react";
import Expense from "./Expense";
import Card from "./uiElements/Card";

const Expenses = ({ items, onDelete }) => {
  const content =
    items.length <= 0 ? (
      <Card>
        <h2>No Expenses Found</h2>
      </Card>
    ) : (
      items.map((expenseObj, index) => (
        <Expense
          key={index}
          id={index}
          name={expenseObj.name}
          amount={expenseObj.amount}
          onDelete={onDelete}
        />
      ))
    );

  return content;
};

export default Expenses;
