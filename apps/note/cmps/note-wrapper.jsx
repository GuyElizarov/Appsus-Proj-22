import { NoteText } from './note-text.jsx'
import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
const { Link } = ReactRouterDOM
export class NoteWrapper extends React.Component {
    state = {

    }

    componentDidMount() {

    }


    render() {
        const { note } = this.props
        if (!note) return <React.Fragment></React.Fragment>
        console.log(note.style)
        const DynamicCmp = () => {
            switch (note.type) {
                case 'note-txt':
                    return <NoteText key={note.id} note={note} />
                case 'note-img':
                    return <NoteImg key={note.id} note={note} />
                case 'note-todos':
                    return <NoteTodos key={note.id} note={note} />
            }
        }
        const { style } = note
        return <div className='note-wrapper' style={style}>
            <DynamicCmp />

            <div className="buttons">

                <label htmlFor="color">🎨 <input style={{ visibility: 'hidden' }} type="color" id='color' /></label> </div>

        </div >

    }


}
{/* {(note.type === 'note-txt') && <NoteText key={note.id} note={note} />}
{(note.type === 'note-img') && <NoteImg key={note.id} note={note} />}
{(note.type === 'note-todos') && <NoteTodos key={note.id} note={note} />} */}