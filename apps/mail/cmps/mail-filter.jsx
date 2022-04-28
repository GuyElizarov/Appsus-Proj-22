export class MailFilter extends React.Component {

    state = {
        criteria: {
            status: '',
            txt: '',
            isRead: false,
            // isStared: false,
            // All: 'all'
            // labels: ['important', 'romantic'] 
        }
    }

    inputRef

    componentDidMount() {
        this.inputRef = React.createRef()
    }

    handleChange = ({ target }) => {
        let value = target.value
        let field = target.name

        if (value === "true") value = true
        else if (value === "false") value = false

        // if (value === "all") field = All
        this.setState((prevState) => ({ criteria: { ...prevState.criteria, [field]: value } }), () => {
            this.props.onSetCriteria(this.state.criteria)
        })

    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetCriteria(this.state.criteria)
    }


    render() {
        const { txt, isRead, isStared } = this.state.criteria
        const { searchBy } = this.state
        return (
            <section>

                <form onSubmit={this.onFilter}>
                    <input name="txt" type="search" value={txt}
                        onChange={this.handleChange} ref={this.inputRef} placeholder="Search mail" />

                    <select onChange={this.handleChange} value={isRead} name="isRead">
                        <option value={true} >Read</option>
                        <option value={false} >Unread</option>
                        {/* <option value={All} >All</option> */}
                        {/* <option name="isStared" value={true} >⭐</option> */}

                    </select>


                </form>
            </section>
        )
    }
}