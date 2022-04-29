import { NoteButtons } from './note-buttons.jsx'
const { Link } = ReactRouterDOM
export function NoteTodos({ note }) {
    const { label, todos } = note.info
    function onDeleteNote(noteId) {
    }
    return <div className="note"><Link to={`/note/${note.id}`}>
        <h2 className='note-layout'>{label}</h2>
        <ul>
            {todos.map(todo => {
                return <li key={todo.todoId}>{todo.txt}</li>
            })}
        </ul>
    </Link>
    </div>
}