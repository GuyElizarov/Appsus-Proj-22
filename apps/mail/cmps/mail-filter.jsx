
const { withRouter } = ReactRouterDOM


class _MailFilter extends React.Component {

    state = {
        criteria: null
        // criteria: {
        //     status: "inbox",
        //     txt: '',
        //     isRead: "all",
        // }
    }

    inputRef = null

    componentDidMount() {
        this.inputRef = React.createRef()
        this.setState({ criteria: this.props.criteria })
    }

    getStatusFromSearch = () => {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        const status = urlSrcPrm.get('status')
        return status
    }

    handleChange = ({ target }) => {
        let value = target.value
        const field = target.name
        if (value === "true") value = true
        else if (value === "false") value = false
        const status = this.getStatusFromSearch()

        if (status) {
            this.setState((prevState) => ({ criteria: { ...prevState.criteria, [field]: value, status: status } }), () => {
                this.props.onSetCriteria(this.state.criteria)
            })
        } else {
            this.setState((prevState) => ({ criteria: { ...prevState.criteria, [field]: value } }), () => {
                this.props.onSetCriteria(this.state.criteria)
            })
        }
    }

    render() {
        if (!this.state.criteria) return <React.Fragment></React.Fragment>
        const { txt } = this.state.criteria
        const { handleChange } = this
        return <section className="mail-filter">
            <form onSubmit={ev => ev.preventDefault()}>
                <input name="txt" type="search" value={txt}
                    onChange={handleChange} ref={this.inputRef} placeholder="Search mail" />
                <select onChange={handleChange} name="isRead">
                    <option value="all" >All</option>
                    <option value={false} >Unread</option>
                    <option value={true} >Read</option>
                </select>
            </form>
        </section>
    }

}

export const MailFilter = withRouter(_MailFilter)