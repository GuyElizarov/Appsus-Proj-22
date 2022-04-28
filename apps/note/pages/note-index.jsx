import { NoteService } from '../services/note-service.js'

import { NotesList } from '../cmps/notes-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'
export class NoteApp extends React.Component {

    state = {
        notes: []

    }

    componentDidMount() {
        NoteService.query().then(res => this.setState({ notes: res }))

    }
    onAddNote = (note) => {
        NoteService.addNote(note)
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query().then(res => this.setState({ notes: res }))
    }
    onDeleteNote = (noteId) => {
        NoteService.remove(noteId).then(res => this.loadNotes())

    }
    onPinToTop = (noteId) => {
        NoteService.pinNoteToTop(noteId).then(res => this.loadNotes())
    }
    render() {
        const { notes } = this.state
        if (!notes || notes.length === 0) return <React.Fragment></React.Fragment>
        return <section className="note-app notes-layout flex column">
            <h1>i AM The note app</h1>
            <AddNote onAddNote={this.onAddNote} />
            <NotesList notes={notes} deleteNote={this.onDeleteNote} pinToTop={this.onPinToTop} />
        </section>
    }
}