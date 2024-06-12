import React, { useState } from "react";
import Card from "./uiElements/Card";

const CreateArea = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const note = {
      name,
      amount,
    };

    onAdd(note);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Expense Name :</label>
          <input
            onChange={nameChangeHandler}
            id="name"
            type="text"
            placeholder="Expense Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Expense Amount :</label>
          <input
            onChange={amountChangeHandler}
            id="amount"
            type="text"
            placeholder="Expense Amount..."
          />
        </div>
        <button>Add Expense</button>
      </form>
    </Card>
  );
};

export default CreateArea;
