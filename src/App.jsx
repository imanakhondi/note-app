import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import Header from "./components/Header";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <div className="container">
        <Header
          sortBy={sortBy}
          onSortNotes={(e) => setSortBy(e.target.value)}
        />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;
