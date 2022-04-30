export class NoteTodosView extends React.Component {



    stopPropagation = (e) => {
        e.preventDefault()
    }



    render() {
        const { note } = this.props
        const { todos, label } = note.info
        return <div onClick={this.stopPropagation} className='note-details details-layout'>
            <h2>{label}</h2>
            <ul>
                {todos.map(todo => <li>
                    <span>{todo.txt}</span>

                </li>

                )}
            </ul>
        </div>
    }
}