import React from "react"
import Editor from "./components/Editor"
import Sidebar from "./components/Sidebar"
import Split from "react-split"
import { doc, onSnapshot, addDoc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection } from "../firebase"

function App() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState("")
  const [tempNoteText, setTempNoteText] = React.useState("")
  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }
  async function updateNote(text) {
    const docRef = doc(notesCollection, currentNoteId);
    await setDoc(docRef, { body: text, updatedAt: Date.now()}, { merge: true });
  }
  async function deleteNote(noteId) {
    const docRef = doc(notesCollection, noteId);
    await deleteDoc(docRef);
  }
  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
      // Sync up our local notes array with the snapshot
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      notesArr.sort((a, b) => b.updatedAt - a.updatedAt);
      setNotes(notesArr)
    })
    return unsubscribe;
  }, [])

  React.useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id)
    }
  }, [notes])

  React.useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote?.body)
    }
  }, [currentNote])

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText)
      }
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [tempNoteText])

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
          <Editor
            tempNoteText={tempNoteText}
            setTempNoteText={setTempNoteText}
          />
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
