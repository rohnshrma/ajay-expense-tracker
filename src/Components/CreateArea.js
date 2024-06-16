import React, { useState } from "react";
import Card from "./uiElements/Card";

const CreateArea = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const note = {
      name,
      amount,
      category,
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
        <div className="form-group">
          <label htmlFor="category">Category :</label>
          <select
            id="category"
            name="category"
            onChange={categoryChangeHandler}
          >
            <option value="" disabled>
              Categories
            </option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="rent">Rent</option>
            <option value="stationary">Stationary</option>
            <option value="misc">Misc</option>
          </select>
        </div>
        <button>Add Expense</button>
      </form>
    </Card>
  );
};

export default CreateArea;
