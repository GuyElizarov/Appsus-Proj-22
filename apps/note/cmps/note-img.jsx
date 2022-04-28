import { NoteButtons } from './note-buttons.jsx'

const { Link } = ReactRouterDOM
export function NoteImg({ note, del }) {

    function onDeleteNote(noteId) {
    }
    if (!note) return <React.Fragment></React.Fragment>
    return <div className="note">
        <Link to={`/note/${note.id}`}>
            <img src={note.info.url} alt="" />
            <span>{note.info.title}</span></Link>
        <NoteButtons noteId={note.id} deleteNote={onDeleteNote} />
    </div>

}