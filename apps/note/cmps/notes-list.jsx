import { NoteText } from './note-text.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteVideo } from './note-video.jsx'
import { NotePreview } from './note-preview.jsx'

export function NotesList({ notes }) {
    if (!notes) return <React.Fragment></React.Fragment>
    function getDynamicCmp(note) {
        switch (note.type) {
            case 'note-txt':
                return <NoteText key={note.id} note={note} />
            case 'note-img':
                return <NoteImg key={note.id} note={note} />
            case 'note-todos':
                return <NoteTodos key={note.id} note={note} />
            case 'note-video':
                return <NoteVideo key={note.id} note={note} />
        }
    }
    return <div className="notes-list flex">
        {notes.map(note => {
            return getDynamicCmp(note)
        })}
    </div>
}

// {notes.map(note => <NotePreview key={note.id} note={note} />)}
{/* {notes.map(note => {
    const DynamicCmp = () => {
        switch (note.type) {
            case 'note-txt':
                return <NoteText key={note.id} note={note} />
            case 'note-img':
                return <NoteImg key={note.id} note={note} />
            case 'note-todos':
                return <NoteTodos key={note.id} note={note} />
        }
    }
    <DynamicCmp />
})} */}

