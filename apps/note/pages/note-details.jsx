import { NoteService } from '../services/note-service.js'
import { NoteTxtView } from '../cmps/note-txt-view.jsx'
import { NoteImgView } from '../cmps/note-img-view.jsx'
import { NoteTodosView } from '../cmps/note-todos-view.jsx'
import { NoteVideoView } from '../cmps/note-video-view.jsx'
const { Link } = ReactRouterDOM
export class NoteDetails extends React.Component {

    state = {
        note: null,
        isEditable: false

    }
    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        const { noteId } = this.props.match.params
        NoteService.getById(noteId).then(note => this.setState({ note: note }))
    }
    handleEvent = (ev) => {
        ev.preventDefault()
    }
    enableEdit = () => {
        this.setState({ isEditable: true })

    }
    onEditNote = (note) => {
        NoteService.editNote(note).then(res => {
            NoteService.query()
            this.props.history.push('/note')
        }
        )
    }


    render() {

        if (!this.state.note) return <React.Fragment></React.Fragment>
        const { note, isEditable } = this.state
        const getDynamicNote = () => {
            console.log(isEditable)
            switch (note.type) {
                case 'note-txt':
                    return <NoteTxtView key={note.id} noteId={note.id} note={note} isEditable={isEditable} editNote={this.onEditNote} />
                case 'note-video':
                    return <NoteVideoView key={note.id} noteId={note.id} note={note} isEditable={isEditable} editNote={this.onEditNote} />
                case 'note-todos':
                    return <NoteTodosView key={note.id} noteId={note.id} note={note} isEditable={isEditable} editNote={this.onEditNote} />
                case 'note-img':
                    return <NoteImgView key={note.id} noteId={note.id} note={note} isEditable={isEditable} editNote={this.onEditNote} />
            }
        }

        return <Link to="/note"> <section className='note-shadow flex justify-center align-center'>I am the shadow
            <div onClick={this.handleEvent} className='note-details-card'>

                {getDynamicNote()}
                <button onClick={this.enableEdit}>Edit note</button>
            </div>
        </section >
        </Link>
    }
}