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
        this.props.deleteNote(noteId)
    }
    onPinToTop = (noteId) => {
        const { pinToTop } = this.props
        pinToTop(noteId)
    }
    onChangeColor = (color, noteId) => {
        const { changeColor } = this.props
        changeColor(color, noteId)

    }
    onDuplicateNote = (noteId) => {
        const { duplicateNote } = this.props
        duplicateNote(noteId)
    }


    backgroundColor
    render() {
        const { noteId, note } = this.props
        const { style } = note
        if (!this.state.type) return <React.Fragment></React.Fragment>
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
        return <div className="note-card" style={style}>
            {getDynamicCmp(note.type)}
            <NoteButtons noteId={note.id} deleteNote={this.onDeleteNote} pinToTop={this.onPinToTop} changeColor={this.onChangeColor} duplicateNote={this.onDuplicateNote} />
        </div>
    }
}