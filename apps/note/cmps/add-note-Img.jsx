export class AddNoteImg extends React.Component {

    state = {
        type: 'note-img',
        note: {
            url: '',
            title: ''
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

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text-area">
                    <textarea placeholder="Enter image url" type="text" id="text-area" name="url" onChange={this.handleChange} />
                </label>
                <label htmlFor="title">
                    <textarea placeholder="Enter image title " name="title" id="title" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>

                <button className="add-button">Add Note</button>
            </form>
        </div>
    }
}