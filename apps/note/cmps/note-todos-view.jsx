import { NoteTodos } from './note-todos.jsx'
import { AddNoteTodos } from './add-note-todos.jsx'
export class NoteTodosView extends React.Component {



    stopPropagation = (e) => {
        e.preventDefault()
    }

    onEditNote = (note) => {
        const { editNote } = this.props
        console.log('im in the view')
        editNote(note)

    }
    render() {
        const { noteId, note, isEditable } = this.props
        console.log(isEditable)
        return <React.Fragment>
            {!isEditable && <NoteTodos noteId={noteId} note={note} />}
            {isEditable && <AddNoteTodos isEditable={isEditable} note={note} editNote={this.onEditNote} />}
        </React.Fragment>
    }



    // render() {
    //     const { note } = this.props
    //     const { todos, label } = note.info
    //     return <div onClick={this.stopPropagation} className='note-details details-layout'>
    //         <h2>{label}</h2>
    //         <ul>
    //             {todos.map(todo => <li>
    //                 <span>{todo.txt}</span>

    //             </li>

    //             )}
    //         </ul>
    //     </div>
    // }
}