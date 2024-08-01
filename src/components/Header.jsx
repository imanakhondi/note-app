import { useNotes } from "../hooks/useNote";

function Header({ sortBy, onSortNotes }) {
  const notes = useNotes();

  return (
    <div className="note-header">
      <h1>
        My Notes <span>({notes.length})</span>
      </h1>
      <div>
        <select value={sortBy} onChange={onSortNotes}>
          <option value="latest">Sort based on latest notes </option>
          <option value="earliest">Sort based on earliest notes </option>
          <option value="completed">Sort based on completed notes </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
