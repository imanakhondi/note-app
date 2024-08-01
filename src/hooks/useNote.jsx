import { useContext } from "react";
import { NotesContext, NotesDispatchContext } from "../context/NotesContext";

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined)
    throw new Error("NoteContext is outside of themeprovider");
  return context;
};

export const useNotesDispatch = () => {
  const context = useContext(NotesDispatchContext);
  if (context === undefined)
    throw new Error("NoteContext is outside of themeprovider");
  return context;
};
