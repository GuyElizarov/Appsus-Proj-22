import { NoteService } from '../services/note-service.js'

import { NotesList } from '../cmps/notes-list.jsx'
import { AddNote } from '../cmps/add-note.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
export class NoteApp extends React.Component {

    state = {
        filterBy: null
        notes: [],

    }

    componentDidMount() {
        NoteService.query().then(res => this.setState({ notes: res }), () => console.log(this.state))

    }



    onAddNote = (note) => {
        NoteService.addNote(note)
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query().then(res => this.setState({ notes: res }))
    }
    onDeleteNote = (noteId) => {
        NoteService.remove(noteId).then(this.loadNotes)

    }
    onPinToTop = (noteId) => {
        NoteService.pinNoteToTop(noteId).then(this.loadNotes)
    }
    onChangeColor = (color, noteId) => {
        NoteService.changeNoteColor(color, noteId).then(this.loadNotes)
    }
    onDuplicateNote = (noteId) => {
        const { duplicateNote } = this.props
        NoteService.duplicateNote(noteId).then(this.loadNotes)
    }
    render() {
        const { notes } = this.state
        return <section className="note-app notes-layout flex column justify-center align-center">
            <h1>i AM The note app</h1>
            <NoteFilter />
            <AddNote onAddNote={this.onAddNote} />
            {(!notes || notes.length === 0) && <React.Fragment></React.Fragment>}
            <NotesList notes={notes} deleteNote={this.onDeleteNote} pinToTop={this.onPinToTop} changeColor={this.onChangeColor} duplicateNote={this.onDuplicateNote} />

        </section>
    }
}