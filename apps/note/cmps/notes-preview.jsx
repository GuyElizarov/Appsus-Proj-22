import { NoteText } from './note-text.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'

export function NotesPreview({ notes }) {
    console.log(notes)
    if (!notes) return <div></div>
    return <div className="notes-preview">
        {notes.map(note => {
            if (note.type === 'note-txt') return <div key={note.id}> <NoteText note={note} /> </div>
            else if (note.type === 'note-img') return <div key={note.id}> <NoteImg note={note} /></div>
            else if (note.type === 'note-todos') return <div key={note.id}><NoteTodos note={note} /></div>

        })}
    </div>
}