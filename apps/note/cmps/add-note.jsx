import { AddNoteTxt } from './add-note-txt.jsx'
import { AddNoteImg } from './add-note-Img.jsx'
import { AddNoteTodos } from './add-note-todos.jsx'
import { AddNoteVideo } from './add-note-video.jsx'


export class AddNote extends React.Component {

    state = {
        noteType: 'note-txt',
        isOnAddNote: false

    }

    onGetNewNote = (note) => {
        this.props.onAddNote(note)
    }

    onChangeNoteType = (type) => {
        this.setState({ noteType: type })
    }

    onOpenAddNote = () => {
        this.setState({ isOnAddNote: true })
    }
    onCloseShadow = () => {
        this.setState({ isOnAddNote: false })
    }
    render() {
        const { isOnAddNote } = this.state
        const DynamicCmp = () => {
            switch (this.state.noteType) {
                case 'note-txt':
                    return <AddNoteTxt onGetNewNote={this.onGetNewNote} />
                case 'note-img':
                    return <AddNoteImg onGetNewNote={this.onGetNewNote} />
                case 'note-todos':
                    return <AddNoteTodos onGetNewNote={this.onGetNewNote} />
                case 'note-video':
                    return <AddNoteVideo onGetNewNote={this.onGetNewNote} />
            }
        }
        return <div className='add-note-wrapper'>

            {!isOnAddNote && <div className='add-note-decoy' onClick={this.onOpenAddNote}>Write your note</div>}
            {isOnAddNote && <div onClick={this.onCloseShadow} className='blank-shadow'></div>}
            {isOnAddNote && <DynamicCmp />}
            {isOnAddNote && <div className='note-type-buttons'>
                <button onClick={() => this.onChangeNoteType('note-txt')}> <img src="../../../assets/imgs/note/add-text.png" alt="" /></button>
                <button onClick={() => this.onChangeNoteType('note-img')}> <img src="../../../assets/imgs/note/add-img.png" alt="" /></button>
                <button onClick={() => this.onChangeNoteType('note-todos')}> <img src="../../../assets/imgs/note/add-todos.png" alt="" /></button>
                <button onClick={() => this.onChangeNoteType('note-video')}> <img src="../../../assets/imgs/note/add-video.png" alt="" /></button>
            </div>}

        </div>
    }
}