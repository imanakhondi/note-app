import { useState } from "react";
import { useNotesDispatch } from "../hooks/useNote";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newNote = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createAt: new Date().toISOString(),
    };
    dispatch({ type: "addNote", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          className="text-field"
          type="text"
          placeholder="note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-field"
          type="text"
          placeholder="note description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
