
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
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetCriteria(this.state.criteria)
    }


    render() {
        const { txt, isRead } = this.state.criteria
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