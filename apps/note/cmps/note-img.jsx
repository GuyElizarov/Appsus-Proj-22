
const { Link } = ReactRouterDOM
export function NoteImg({ note }) {

    if (!note) return <React.Fragment></React.Fragment>
    return <Link to={`/note/${note.id}`}><div className="note">
        <img src={note.info.url} alt="" />
        <span>{note.info.title}</span>
    </div>
    </Link>
}