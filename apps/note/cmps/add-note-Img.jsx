export class AddNoteImg extends React.Component {

    state = {
        type: 'note-img',
        note: {
            url: '',
            title: ''
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
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }), () => {
        })
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

                <button onClick={this.onSaveNote} className="add-button">Add Note</button>
            </form>
        </div>
    }
}