const { Link } = ReactRouterDOM
export class AddNoteTxt extends React.Component {

    state = {
        // isEditable: false,
        noteId: null,
        type: 'note-txt',
        note: {
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
        this.setState((prevState) => ({ note: { ...prevState.note, [field]: value } }))
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
    // check = (ev) => {
    //     ev.preventDefault()

    //     if (this.state.isEditable) {
    //         this.props.editNote(this.state)
    //     } else {
    //         this.props.onGetNewNote(this.state)
    //     }

    // }


    render() {
        console.log(this.state)
        return <div className="check ">
            <form onSubmit={(ev) => {
                ev.preventDefault()
                console.log('event', ev);
                //this.onSaveNote(ev)
            }}>
                <label htmlFor="text-area">
                    <textarea placeholder="Enter your text" type="text" id="text-area" name="txt" onChange={this.handleChange} />
                </label>
                <button onClick={(ev) => this.onSaveNote(ev)} className="add-button">Add Note</button>
            </form>
        </div >
    }
}