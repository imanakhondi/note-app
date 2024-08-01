import { useNotes } from "../hooks/useNote";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <span>No Notes has already been added!</span>
        <span>❌</span>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All
        <span>{allNotes}</span>
      </li>
      <li>
        Completed
        <span>{completedNotes}</span>
      </li>
      <li>
        Open
        <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
