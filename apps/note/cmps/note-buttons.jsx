export class NoteButtons extends React.Component {


    onDeleteNote = () => {
        const { noteId, deleteNote } = this.props
        deleteNote(noteId)
    }
    onPinToTop = () => {
        const { noteId, pinToTop } = this.props
        console.log(this.props)
        pinToTop(noteId)
    }

    render() {

        return <div className="note-buttons">
            <button onClick={this.onDeleteNote}>delete</button>
            <button>update</button>
            <button>view</button>
            <button onClick={this.onPinToTop}>pin</button>
            <div>color</div>
        </div>
    }
}