import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";

import Expenses from "./Components/Expenses";

function App() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (noteObj) => {
    console.log("noteObject=>", noteObj);

    setNotes((prevExpenses) => {
      return [noteObj, ...prevExpenses];
    });
  };

  const deleteNoteHandler = (id) => {
    console.log("deleting expense with the id", id);

    setNotes((prevExpenses) => {
      return prevExpenses.filter((expense, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">Expense Tracker</header>
      <CreateArea onAdd={addNoteHandler} />
      <Expenses onDelete={deleteNoteHandler} items={notes} />
    </div>
  );
}

export default App;
