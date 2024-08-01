import { useNotes, useNotesDispatch } from "../hooks/useNote";

function NoteList({ sortBy }) {
  const notes = useNotes();

  let sortNotes = notes;

  if (sortBy === "latest") {
    sortNotes = [...notes].sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );
  }
  if (sortBy === "earliest") {
    sortNotes = [...notes].sort(
      (a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime()
    );
  }
  if (sortBy === "completed") {
    sortNotes = [...notes].sort((a, b) => b.completed - a.completed);
  }
  return (
    <div className="note-list">
      {sortNotes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
}

export default NoteList;

const NoteItem = ({ note }) => {
  const dispatch = useNotesDispatch();
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            className="trash"
            id={note.id}
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <input
            type="checkbox"
            id={note.id}
            value={note.id}
            onChange={(e) =>
              dispatch({ type: "completedNote", payload: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
