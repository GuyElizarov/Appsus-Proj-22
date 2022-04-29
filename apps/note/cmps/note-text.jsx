import { NoteButtons } from './note-buttons.jsx'
const { Link } = ReactRouterDOM
export class NoteText extends React.Component {
    state = {
        note: null,
        style: {
            backgroundColor: 'blue'
        }
    }
    componentDidMount() {
        const { note } = this.props
        const backgroundColor = note.style
        this.setState({ note: note })
        this.setState((prevState) => ({ style: { backgroundColor: backgroundColor } }))
    }
    onDeleteNote = (noteId) => {
        this.props.deleteNote(noteId)
    }

    render() {
        const { note } = this.state
        const { style } = this.state
        if (!note) return <React.Fragment></React.Fragment>
        const backgroundColor = style.backgroundColor
        return <div style={style} className="note" > <Link to={`/note/${note.id}`}>
            <p className='note-layout'>{note.info.txt}</p>
        </Link>
        </div>
    }


}
{/* <div className="buttons-wrapper"> <label htmlFor="backgroundColor">
    🎨<input type="color" style={{ visibility: 'hidden' }} id="backgroundColor" name="backgroundColor" />
</label></div> */}