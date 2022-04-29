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
    render() {
        const { noteId } = this.props
        return <div className="note-buttons">
            <button onClick={this.onDeleteNote}><img src="../../../assets/imgs/trash.png" alt="" /></button>
            <button onClick={this.onPinToTop}><img src="../../../assets/imgs/pin.png" alt="" /></button>
            <button onClick={this.onOpenColorPicker}><img src="../../../assets/imgs/color-picker.png" alt="" /></button>
            {this.state.isColorOpen && <ColorPicker noteId={noteId} changeColor={this.onChangeColor} />}
        </div>
    }
}