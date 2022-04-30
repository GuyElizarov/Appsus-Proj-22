export class AddNoteVideo extends React.Component {

    state = {
        type: 'note-video',
        note: {
            url: '',
            title: ''
        }
    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        if (field === 'url') {
            const urlId = value.split('v=')[1].substring(0, 11)
            const embeddedUrl = `https://www.youtube.com/embed/${urlId}`
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: embeddedUrl } }), () => {
            })

        } else {
            this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }), () => {
            })
        }
    }

    onSaveNote = (ev) => {
        ev.preventDefault()

        this.props.onGetNewNote(this.state)

    }

    render() {

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="video-url">
                    <textarea placeholder="Enter video url" type="text" cols="30" rows="10" id="video-url" name="url" onChange={this.handleChange} />
                </label>
                <label htmlFor="title">
                    <textarea type="text" placeholder="Enter note txt" name="title" id="title" onChange={this.handleChange}></textarea>
                </label>

                <button className="add-button">Add Note</button>
            </form>
        </div>
    }
}