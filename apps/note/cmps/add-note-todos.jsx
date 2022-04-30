import { utilService } from "../../../services/util-service.js"

export class AddNoteTodos extends React.Component {


    state = {
        type: 'note-todos',
        note: {
            label: null,
            todos: null
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
        this.setState((prevState) => ({ note: { ...prevState.note, todos: todoList } }), () => this.props.onGetNewNote(this.state))



    }



    render() {

        return <div className="check">
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="label">
                    <textarea placeholder="Enter todos title" name="label" id="label" cols="30" rows="10" onChange={this.handleChange}></textarea>
                </label>
                <label htmlFor="todos">
                    <textarea placeholder="enter comma separated list" type="text" id="note-todos" name="todos" onChange={this.handleChange} />
                </label>
                <button className="add-button">Add Note</button>
            </form>
        </div>
    }
}