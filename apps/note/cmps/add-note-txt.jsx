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
            console.log(this.props)
            const { info, id } = this.props.note
            console.log(info, id)
            this.setState({ isEditable: true })
            this.setState({ note: info })
            this.setState({ noteId: id }, () => console.log(this.state))
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
        if (this.state.isEditable) {
            console.log(this.state)
            this.props.editNote(this.state)
        } else {
            this.props.onGetNewNote(this.state)
        }

    }
    check = (ev) => {
        ev.preventDefault()

        if (this.state.isEditable) {
            console.log(this.state)
            this.props.editNote(this.state)
        } else {
            this.props.onGetNewNote(this.state)
        }
    }


    render() {

        return <div className="check ">
            <form onSubmit={this.check}>
                <label htmlFor="text-area">
                    <textarea type="text" id="text-area" name="txt" onChange={this.handleChange} />
                </label>
                {this.state.isEditable && <Link to="/note"><button onClick={this.check}>Add Note</button></Link>}
                {/* {!this.state.isEditable&& <button></button>} */}
            </form>
        </div >
    }
}