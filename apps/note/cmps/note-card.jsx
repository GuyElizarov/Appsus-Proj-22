import { NoteText } from './note-text.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteVideo } from './note-video.jsx'
import { NoteButtons } from './note-buttons.jsx'


// export function NoteCard({ noteId, note }) {
export class NoteCard extends React.Component {

    state = {
        type: ''
    }

    componentDidMount() {
        this.setState({ type: this.props.note.type })
    }

    onDeleteNote = (noteId) => {
        console.log(noteId)
        this.props.deleteNote(noteId)
    }
    onPinToTop = (noteId) => {
        console.log(noteId)
        const { pinToTop } = this.props
        pinToTop(noteId)
    }
    render() {
        if (!this.state.type) return <React.Fragment></React.Fragment>
        const { noteId, note } = this.props
        console.log(note)
        function getDynamicCmp(type) {
            switch (type) {
                case 'note-txt':
                    return <NoteText key={noteId} note={note} />
                case 'note-img':
                    return <NoteImg key={noteId} note={note} />
                case 'note-todos':
                    return <NoteTodos key={noteId} note={note} />
                case 'note-video':
                    return <NoteVideo key={noteId} note={note} />
            }
        }

        return (<div className="note-card">
            {getDynamicCmp(note.type)}
            <NoteButtons noteId={note.id} deleteNote={this.onDeleteNote} pinToTop={this.onPinToTop} />
        </div>)
    }
}