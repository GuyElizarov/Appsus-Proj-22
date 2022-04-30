
const { withRouter } = ReactRouterDOM


class _MailFilter extends React.Component {

    state = {
        criteria: {
            status: '',
            txt: '',
            isRead: "all",
            // isStared: false,
            // labels: ['important', 'romantic'] 
        }
    }

    inputRef

    componentDidMount() {
        this.inputRef = React.createRef()
        this.getStatusFromSearch()
    }

    getStatusFromSearch = () => {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        const status = urlSrcPrm.get('status')

        this.setState((prevState) => ({ criteria: { ...prevState.criteria, status } }), () => {
            this.props.onSetCriteria(this.state.criteria)
        })
    }

    handleChange = ({ target }) => {
        let value = target.value
        const field = target.name

        if (value === "true") value = true
        else if (value === "false") value = false

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
        return <section className="mail-filter">

            <form onSubmit={this.onFilter}>
                <input name="txt" type="search" value={txt}
                    onChange={this.handleChange} ref={this.inputRef} placeholder="Search mail" />

                <select onChange={this.handleChange} value={isRead} name="isRead">
                    <option value="all" >All</option>
                    <option value={false} >Unread</option>
                    <option value={true} >Read</option>
                    {/* <option name="isStared" value={true} >⭐</option> */}

                </select>


            </form>
        </section>

    }
}

export const MailFilter = withRouter(_MailFilter)