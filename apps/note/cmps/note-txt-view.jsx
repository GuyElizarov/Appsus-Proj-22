import { NoteText } from './note-text.jsx'
import { AddNoteTxt } from './add-note-txt.jsx'

export class NoteTxtView extends React.Component {





    onEditNote = (note) => {
        const { editNote } = this.props
        console.log('im in the view')
        editNote(note)

    }

    render() {
        const { noteId, note, isEditable } = this.props
        return <React.Fragment>
            {(!isEditable) && <NoteText noteId={noteId} note={note} />}
            {(isEditable) && <AddNoteTxt isEditable={isEditable} note={note} editNote={this.onEditNote} />}
        </React.Fragment>

    }

}

// const { txt } = this.props.note.info
//         console.log(this.props.info)
//         return <div onClick={this.stopPropagation} className='note-details'>
//             <h1 className="details-layout">{txt}</h1>
//         </div>
//     