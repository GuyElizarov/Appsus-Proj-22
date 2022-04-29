export class MailFolderList extends React.Component {

    state = {
        criteria: {
            status: '',
            txt: '',
            isRead: false,
            isStared: false,
        }
    }

    componentDidMount() {
console.log(this.props);
        // const urlSrcPrm = new URLSearchParams(this.props.location.search)
        // const criteria = urlSrcPrm.get('criteria')
        // console.log(criteria, "criteria from folder");
        // if (!criteria) return
        // this.setState({ criteria })
    }


    // handleChange = ({ target }) => {
    //     const value = target.value
    //     const field = target.name
    //     this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
    //         // this.props.onSetFilter(this.state.filterBy)
    //     })
    // }

    // onFilter = (ev) => {
    //     ev.preventDefault()
    //     this.props.onSetFilter(this.state.filterBy)
    // }

    render() {
        console.log(this.props);

        return <section className="mail-folder-list">
            <div className="inbox">Inbox</div>
            <div className="starred">Starred</div>
            <div className="sent-mail">Sent mail</div>
            <div className="draft">Draft</div>
        </section>
    }
}
