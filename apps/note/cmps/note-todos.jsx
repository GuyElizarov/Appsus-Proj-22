const { Link } = ReactRouterDOM
export function NoteTodos({ note }) {
    const { label, todos } = note.info

    return <Link to={`/note/${note.id}`}>
        <div className="note">
            <h2>{label}</h2>
            <ul>
                {todos.map(todo => {
                    <li>{todo.txt}</li>
                })}
            </ul>
        </div>
    </Link>
}