export function NoteImg({ note }) {

    console.log(note)
    return <div className="note">
        <img src={note.info.url} alt="" />
        <p></p>
    </div>

}