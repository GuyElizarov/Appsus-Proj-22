export class AddNoteVideo extends React.Component {

    state = {
        type: 'note-video',
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

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        if (field === 'url') {
            const urlId = value.split('v=')[1].substring(0, 11)
            const embeddedUrl = `https://www.youtube.com/embed/${urlId}`
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: embeddedUrl } }))

        } else {
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }))
        }
    }

    // onSaveNote = (ev) => {
    //     ev.preventDefault()

    //     this.props.onGetNewNote(this.state)

    // }

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

    render() {

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="video-url">
                    <textarea placeholder="Enter video url" type="text" cols="30" rows="10" id="video-url" name="url" onChange={this.handleChange} />
                </label>
                <label htmlFor="txt">
                    <textarea type="text" placeholder="Enter note txt" name="txt" id="txt" onChange={this.handleChange}></textarea>
                </label>

                <button onClick={this.onSaveNote} className="add-button">Add Note</button>
            </form>
        </div>
    }
}