const { Link } = ReactRouterDOM
export function NoteText({ note }) {

    return <Link to={`/note/${note.id}`}><div className="note">
        <p>{note.info.txt}</p>

    </div>
    </Link>

}