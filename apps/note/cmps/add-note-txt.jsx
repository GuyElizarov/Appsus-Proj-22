const { Link } = ReactRouterDOM
export class AddNoteTxt extends React.Component {

    state = {
        isEditable: false,
        noteId: null,
        type: 'note-txt',
        note: {
            txt: ''
        }
    }

    componentDidMount() {

        if (this.props.isEditable) {
            const { info, id } = this.props.note
            this.setState({ isEditable: true })
            this.setState({ note: info })
            this.setState({ noteId: id })
        }

    }

    handleChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }))
    }

    onSaveNote = (ev) => {
        ev.preventDefault()
        if (this.state.isEditable) {
            this.props.editNote(this.state)
            console.log('im in the edit')
        } else {
            this.props.onGetNewNote(this.state)
            console.log('im in the add')
        }

    }
    // check = (ev) => {
    //     ev.preventDefault()

    //     if (this.state.isEditable) {
    //         this.props.editNote(this.state)
    //     } else {
    //         this.props.onGetNewNote(this.state)
    //     }

    // }


    render() {

        return <div className="check ">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text-area">
                    <textarea placeholder="Enter your text" type="text" id="text-area" name="txt" onChange={this.handleChange} />
                </label>
                <button className="add-button">Add Note</button>
            </form>
        </div >
    }
}