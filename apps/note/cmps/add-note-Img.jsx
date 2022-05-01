export class AddNoteImg extends React.Component {

    state = {
        type: 'note-img',
        note: {
            url: '',
            txt: ''
        }
    }

    componentDidMount() {

        if (this.props.isEditable) {
            const { info, id } = this.props.note
            // this.setState({ isEditable: true })
            this.setState({ note: info })
            this.setState({ noteId: id })
        }

    }
    onSaveNote = (ev) => {
        ev.preventDefault()
        console.log('im in the edit1')
        if (this.props.isEditable) {
            console.log('im in the edit')
            this.props.editNote(this.state)
        } else {
            this.props.onGetNewNote(this.state)
            console.log('im in the add')
        }

    }

    handleChange = ({ target }) => {
        console.log(target.value)
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }))
    }



    render() {
        const { isEditable } = this.props

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="url">
                    <textarea placeholder="Enter image url" type="text" id="url" name="url" onChange={this.handleChange} />
                </label>
                <label htmlFor="txt">
                    <textarea placeholder="Enter image txt " name="txt" id="txt" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>

                <button onClick={this.onSaveNote} className="add-button">Add Note</button>
            </form>
        </div>
    }
}