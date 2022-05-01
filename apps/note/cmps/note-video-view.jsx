import { NoteVideo } from './note-video.jsx'
import { AddNoteVideo } from './add-note-video.jsx'
export class NoteVideoView extends React.Component {

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
            {!isEditable && <NoteVideo noteId={noteId} note={note} />}
            {isEditable && <AddNoteVideo isEditable={isEditable} note={note} editNote={this.onEditNote} />}
        </React.Fragment>
    }
}
{/* const { url, title } = this.props.note.info
return <div onClick={this.stopPropagation} className='note-details'>
    <iframe src={url} frameborder="0"></iframe>
    <h2 className="details-layout">{title}</h2>
</div> */}