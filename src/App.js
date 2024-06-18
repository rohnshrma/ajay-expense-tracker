import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";

import Expenses from "./Components/Expenses";
import CategoryBar from "./Components/uiElements/CategoryBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const addNoteHandler = (expObj) => {
    console.log("noteObject=>", expObj);

    setExpenses((prevExpenses) => {
      return [expObj, ...prevExpenses];
    });
  };

  const deleteNoteHandler = (id) => {
    console.log("deleting expense with the id", id);

    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense, index) => {
        return index !== id;
      });
    });
  };

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <header className="App-header">Expense Tracker</header>

      <CreateArea onAdd={addNoteHandler} />
      <CategoryBar onSelect={categoryHandler} />
      <Expenses
        onDelete={deleteNoteHandler}
        items={
          selectedCategory === "all"
            ? expenses
            : expenses.filter((exp) => exp.category === selectedCategory)
        }
      />
    </div>
  );
}

export default App;
