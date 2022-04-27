export class LongText extends React.Component {

    state = {
        isShortTxt: true,
        isFullTxtShown: false
    }

    componentDidMount = () => {
        if (this.props.text.length > 100) this.setState({ isShortTxt: false })
    }

    onToggleShownTxt = () => {
        this.setState({ isFullTxtShown: !this.state.isFullTxtShown })
    }

    get txtToShow() {
        const { text } = this.props
        const { isFullTxtShown, isShortTxt } = this.state
        return ((isShortTxt) || (!isShortTxt && isFullTxtShown)) ? text : text.substring(0, 100) + '...'
    }

    render() {
        const { isFullTxtShown, isShortTxt } = this.state
        return <span className="long-text">{this.txtToShow}
            {!isShortTxt &&
                <button className="show-btn" onClick={this.onToggleShownTxt}>
                    {isFullTxtShown ? 'Read less' : 'Read more'}
                </button>}
        </span>
    }
}