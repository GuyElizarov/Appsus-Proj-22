import { AddNoteTxt } from './add-note-txt.jsx'
import { AddNoteImg } from './add-note-Img.jsx'
import { AddNoteTodos } from './add-note-todos.jsx'
import { AddNoteVideo } from './add-note-video.jsx'
import { NoteService } from '../services/note-service.js'

export class AddNote extends React.Component {

    state = {
        noteType: 'note-txt'

    }

    onGetNewNote = (note) => {
        this.props.onAddNote(note)
    }

    onChangeNoteType = (type) => {
        this.setState({ noteType: type })
    }
    render() {

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
        return <div>


            <DynamicCmp />
            <div className='note-type-buttons'>
                <button onClick={() => this.onChangeNoteType('note-txt')}>Note txt </button>
                <button onClick={() => this.onChangeNoteType('note-img')}>Note img  </button>
                <button onClick={() => this.onChangeNoteType('note-todos')}>Note todos </button>
                <button onClick={() => this.onChangeNoteType('note-video')}>Note video </button>
            </div>

        </div>
    }
}