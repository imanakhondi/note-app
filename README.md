
# Note App

This is a simple note-taking application developed using React and Vite.

## Features

- Add new notes through a form located in the sidebar.
- Display a list of notes in the main section.
- Sort notes by ascending, descending, and completed status.
- Mark notes as completed.
- Delete notes from the list.

## Scripts

- `dev`: Run the application in development mode.
- `build`: Build the application for production.
- `lint`: Lint the code using ESLint.
- `preview`: Preview the production build.

## Installation and Setup

To install dependencies and run the application, follow these steps:

```bash
npm install
npm run dev
```


## State Management

The application uses React's Context API and `useReducer` for state management.

### Contexts

- `NotesContext`: Provides the current state of notes.
- `NotesDispatchContext`: Provides the dispatch function to update the state.

### Reducer

The `notesReducer` function handles the following actions:

- `addNote`: Adds a new note to the state.
- `deleteNote`: Removes a note from the state by its ID.
- `completedNote`: Toggles the completed status of a note by its ID.

### Provider

The `NotesProvider` component wraps the application and provides the state and dispatch contexts to its children.

```javascript
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
      throw new Error("Unknown action type: " + type);
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
```
