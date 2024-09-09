import React from "react"
import Editor from "./components/Editor"
import Sidebar from "./components/Sidebar"
import Split from "react-split"
import {nanoid} from "nanoid"

function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )
  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }
  function updateNote(text) {
    setNotes(oldNotes => {
      const updatedNotes = oldNotes.map(oldNote => {
        return oldNote.id === currentNoteId ? { ...oldNote, body: text }
        : oldNote
      });
      const updatedNote = updatedNotes.find(note => note.id === currentNoteId);
      const filteredNotes = updatedNotes.filter(note => note.id !== currentNoteId);
      return [updatedNote, ...filteredNotes];
    })
  }
  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(notes => {
      const filteredNotes = notes.filter(note => note.id !== noteId);
      return filteredNotes;
    })
  }
  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <main>
      {
        notes.length > 0 ?
        <Split
          sizes={[30, 70]}
          direction="horizontal"
          className="split"
        >
          <Sidebar
            notes={notes}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            currentNote={currentNote}
            deleteNote={deleteNote}
          />
          {
            currentNoteId &&
            notes.length > 0 &&
            <Editor
              currentNote={currentNote}
              updateNote={updateNote}
            />
          }
        </Split>
        :
        <div className='no-notes'>
          <h1>You have no notes</h1>
          <button
            className='first-note'
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      }
    </main>
  )
}

export default App
