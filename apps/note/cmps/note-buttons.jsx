export class NoteButtons extends React.Component {


    onDeleteNote = () => {
        const { noteId, deleteNote } = this.props
        deleteNote(noteId)
    }

    render() {

        return <div className="note-buttons">
            <button onClick={this.onDeleteNote}>delete</button>
            <button>update</button>
            <button>view</button>
            <div>color</div>
        </div>
    }
}