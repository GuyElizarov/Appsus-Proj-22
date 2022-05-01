import { NoteImg } from './note-img.jsx'
import { AddNoteImg } from './add-note-img.jsx'
export class NoteImgView extends React.Component {


    stopPropagation = (e) => {
        e.preventDefault()
    }

    onEditNote = (note) => {
        const { editNote } = this.props
        console.log('im in the view')
        editNote(note)

    }



    render() {
        const { noteId, note, isEditable } = this.props
        console.log(isEditable)
        return <React.Fragment>
            {!isEditable && <NoteImg noteId={noteId} note={note} />}
            {isEditable && <AddNoteImg isEditable={isEditable} note={note} editNote={this.onEditNote} />}
        </React.Fragment>
    }
}