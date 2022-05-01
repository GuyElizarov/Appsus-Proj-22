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
            <div className="inbox" onClick={() => this.setStatus('inbox')} ><div className="folder-icon"><img src="./assets/imgs/mail/icons8-inbox-24.png"/> </div>  Inbox</div>
            <div className="sent" onClick={() => this.setStatus('sent')}><div className="folder-icon"><img  src="./assets/imgs/mail/icons8-sent-26.png"/></div>  Sent mail</div>
            <div className="stared" onClick={() => this.setStatus('stared')}><div className="folder-icon"><img  src="./assets/imgs/mail/icons8-star-24.png"/></div>  Stared</div>
            <div className="draft" onClick={() => this.setStatus('draft')}><div className="folder-icon"><img  src="./assets/imgs/mail/icons8-paper-24.png"/></div> Draft</div>
            <div className="trash" onClick={() => this.setStatus('trash')}> <div className="folder-icon"><img  src="./assets/imgs/mail/seo.png"/></div>  Trash</div>
        </section>
    }
}

export const MailFolderList = withRouter(_MailFolderList)