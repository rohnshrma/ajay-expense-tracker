import React from "react";
import Card from "./uiElements/Card";

const Expense = ({ name, amount, onDelete, id, category }) => {
  const clickHandler = () => {
    onDelete(id);
  };

  return (
    <Card>
      <div className="expense-card__name">{name}</div>
      <div className="expense-card__amount">{amount}</div>
      <div className="expense-card__category">{category}</div>
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
};

export default Expense;
