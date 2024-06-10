import { useState } from "react";
import "./App.css";
import CreateArea from "./Components/CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (noteObj) => {
    console.log("noteObject=>", noteObj);

    setNotes((prevNotes) => {
      return [noteObj, ...prevNotes];
    });
  };

  return (
    <div className="App">
      <header className="App-header">Expense Tracker</header>
      <CreateArea onAdd={addNoteHandler} />
    </div>
  );
}

export default App;
