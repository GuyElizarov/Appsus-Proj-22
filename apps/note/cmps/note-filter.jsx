

export class NoteFilter extends React.Component {
    state = {
        txt: '',
        noteType: ''
    }


    // componentDidMount() {
    // }

    handleChange = ({ target }) => {
        const value = target.value
        console.log(value)
        const field = target.name
        this.setState((prevState) => ({ [field]: value }), () => {
            this.props.setNoteFilter(this.state)
        })
    }

    inputRef = React.createRef()
    render() {
        console.log('hh')
        if (!this.inputRef) return <React.Fragment></React.Fragment>
        return <div className="filter-by-note">
            <input ref={this.inputRef} type="text" name="txt" placeholder="search" onChange={this.handleChange} />
            <select name="noteType" id="" onChange={this.handleChange}>
                <option value="">All</option>
                <option value="note-txt">Note txt</option>
                <option value="note-img">Note img</option>
                <option value="note-video">Note video</option>
                <option value="note-todos">Note todos</option>
            </select>
        </div>
    }
}
