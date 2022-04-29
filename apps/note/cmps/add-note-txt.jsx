export class AddNoteTxt extends React.Component {

    state = {
        type: 'note-txt',
        note: {
            txt: ''
        }
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }), () => {
        })
    }

    onSaveNote = (ev) => {
        ev.preventDefault()

        this.props.onGetNewNote(this.state)

    }

    render() {

        return <div className="check ">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text-area">
                    <textarea type="text" id="text-area" name="txt" onChange={this.handleChange} contentEditable="true" />
                </label>
                <button>Add Note</button>
            </form>
        </div >
    }
}