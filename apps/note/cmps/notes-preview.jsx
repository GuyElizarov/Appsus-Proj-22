import { NoteText } from './note-text.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteWrapper } from './note-wrapper.jsx'

export function NotesPreview({ notes }) {
    if (!notes) return <React.Fragment></React.Fragment>
    return <div className="notes-preview">
        {notes.map(note => <NoteWrapper key={note.id} note={note} />)}
    </div>
}

// {notes.map(note => <NoteWrapper key={note.id} note={note} />)}