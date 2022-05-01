import { ColorPicker } from './color-picker.jsx'


export class NoteButtons extends React.Component {

    state = {
        isColorOpen: false
    }
    onDeleteNote = () => {
        const { noteId, deleteNote } = this.props
        deleteNote(noteId)
    }
    onPinToTop = () => {
        const { noteId, pinToTop } = this.props
        pinToTop(noteId)
    }
    onOpenColorPicker = () => {

        this.setState({ isColorOpen: !this.state.isColorOpen }, () => console.log(this.state))

    }
    onChangeColor = (color, noteId) => {
        const { changeColor } = this.props
        changeColor(color, noteId)
    }

    onDuplicateNote = () => {
        const { duplicateNote, noteId } = this.props
        duplicateNote(noteId)
    }


    render() {
        const { noteId } = this.props
        return <div className="note-buttons">
            <button onClick={this.onDeleteNote}><img src="assets/imgs/note/trash.png" alt="" /></button>
            <button onClick={this.onPinToTop}><img src="assets/imgs/note/pin.png" alt="" /></button>
            <button onClick={this.onOpenColorPicker}><img src="assets/imgs/note/color-picker.png" alt="" /></button>
            <button onClick={this.onDuplicateNote}><img src="assets/imgs/note/duplicate-note.png" alt="" /></button>
            {this.state.isColorOpen && <ColorPicker noteId={noteId} changeColor={this.onChangeColor} />}
        </div>
    }
}