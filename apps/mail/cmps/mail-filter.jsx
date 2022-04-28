
export class MailFilter extends React.Component {

    state = {
        criteria: {
            status: '',
            txt: '',
            isRead: false,
            // isStared: true, 
            // labels: ['important', 'romantic'] 
        }
    }

    inputRef

    componentDidMount() {
        this.inputRef = React.createRef()
    }

    handleChange = ({ target }) => {
<<<<<<< HEAD
        let value = target.value
        switch (target.value) {
            case "true":
                value = true
                break;
            case "false":
                value = false
                break;
        }
        const field = target.name
        this.setState((prevState) => ({ criteria: { ...prevState.criteria, [field]: value } }), () => {
            this.props.onSetCriteria(this.state.criteria)
        })
<<<<<<< HEAD
=======
        console.log(this.state);
=======
        const value = target.value
        this.setState((prevState) => ({ ...prevState, searchBy: value }))
>>>>>>> 48456f9 (Eytans commit)
>>>>>>> 3c91097e0cb546b5df59b959737f9dcb5e938bf3
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetCriteria(this.state.criteria)
    }


    render() {
<<<<<<< HEAD
        const { txt, isRead } = this.state.criteria
=======
        const { searchBy } = this.state
>>>>>>> 48456f9 (Eytans commit)
        return (
            <section>

                <form onSubmit={this.onFilter}>
                    <input name="txt" type="search" value={txt}
                        onChange={this.handleChange} ref={this.inputRef} placeholder="Search mail" />

                    <select onChange={this.handleChange} value={isRead} name="isRead">
                        <option value={true} >Read</option>
                        <option value={false} >Unread</option>
                    </select>
                </form>
            </section>
        )
    }
}