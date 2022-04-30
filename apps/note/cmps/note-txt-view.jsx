import { NoteText } from './note-text.jsx'
import { AddNoteTxt } from './add-note-txt.jsx'

export class NoteTxtView extends React.Component {





    onEditNote = (note) => {
        const { editNote } = this.props
        editNote(note)

    }

    render() {
        const { noteId, note, isEditable } = this.props

        if (!isEditable) return <NoteText noteId={noteId} note={note} />
        if (isEditable) return <AddNoteTxt isEditable={isEditable} note={note} editNote={this.onEditNote} />

    }

}

// const { txt } = this.props.note.info
//         console.log(this.props.info)
//         return <div onClick={this.stopPropagation} className='note-details'>
//             <h1 className="details-layout">{txt}</h1>
//         </div>
//     