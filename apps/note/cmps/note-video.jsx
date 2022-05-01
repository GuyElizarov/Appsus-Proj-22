const { Link } = ReactRouterDOM
import { NoteButtons } from './note-buttons.jsx'

export class NoteVideo extends React.Component {
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


    render() {
        const { note } = this.state
        const { style } = this.state
        if (!note) return <React.Fragment></React.Fragment>
        return <div style={style} className="note" >
            <iframe allow={'fullscreen'} src={`${note.info.url}`} ></iframe>
            <Link to={`/note/${note.id}`}><span className='note-layout'>{note.info.txt}</span></Link>
        </div>
    }


}