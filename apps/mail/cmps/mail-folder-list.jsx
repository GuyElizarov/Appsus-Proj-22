const { withRouter } = ReactRouterDOM

class _MailFolderList extends React.Component {

    state = {
        criteria: null
    }

    componentDidMount() {
        this.setState({criteria: this.props.criteria})
    }

    getCriteriaFromSearchParm = () => {
        const urlSrcPrm = new URLSearchParams(this.props.location.search)
        let paramObj = {}
        for (var value of urlSrcPrm.keys()) {
            paramObj[value] = urlSrcPrm.get(value);
        }
        if (!Object.keys(paramObj)) paramObj = null

        return paramObj
    }

    setStatus = (status) => {
        const criteria = this.getCriteriaFromSearchParm()
        criteria.status = status

        this.setState(({ criteria }), () => {
            this.props.onSetCriteria(this.state.criteria)
        })
    }

    render() {
        return <section className="mail-folder-list">
            <div className="inbox" onClick={() => this.setStatus('inbox')} >Inbox</div>
            <div className="sent" onClick={() => this.setStatus('sent')}>Sent mail</div>
            <div className="stared" onClick={() => this.setStatus('stared')}>Stared</div>
            <div className="draft" onClick={() => this.setStatus('draft')}>Draft</div>
            <div className="trash" onClick={() => this.setStatus('trash')}>Trash</div>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)