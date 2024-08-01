import { createContext, useReducer } from "react";

export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);
const INITIAL_STATE = [];
const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "addNote": {
      return [...state, payload];
    }
    case "deleteNote": {
      return state.filter((note) => note.id !== payload);
    }
    case "completedNote": {
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }

    default:
      throw new Error("Unknown state" + type);
  }
};

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
