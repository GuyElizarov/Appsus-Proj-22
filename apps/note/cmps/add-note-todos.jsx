import { utilService } from "../../../services/util-service.js"

export class AddNoteTodos extends React.Component {

    state = {
        type: 'note-todos',
        note: {
            txt: null,
            todos: null
        }
    }
    componentDidMount() {

        if (this.props.isEditable) {
            const { info, id } = this.props.note
            console.log(info, id)
            this.setState({ note: info }, () => console.log(this.state.note))
            this.setState({ noteId: id }, () => console.log(this.state.noteId))
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
        const value = this.state.note.todos
        const todosArr = value.split(',')
        const todoList = todosArr.map(todo => {
            return { txt: todo, doneAt: null, todoId: utilService.makeId() }
        })
        this.setState((prevState) => ({ note: { ...prevState.note, todos: todoList } }), () => {
            if (this.props.isEditable) {
                console.log('im in the edit')
                this.props.editNote(this.state)
            } else {
                this.props.onGetNewNote(this.state)
                console.log('im in the add')
            }
        }
        )
    }

    render() {
        const { isEditable } = this.props
        console.log(this.state)

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="txt">
                    <textarea placeholder="Enter todos title" name="txt" id="txt" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
                <label htmlFor="todos">
                    <textarea placeholder="enter comma separated list" type="text" id="note-todos" name="todos" onChange={this.handleChange} />
                </label>
                <button onClick={this.onSaveNote} className="add-button">Add Note</button>
            </form>
        </div>
    }
}