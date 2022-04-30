export class NoteVideoView extends React.Component {

    stopPropagation = (e) => {
        e.preventDefault()
    }



    render() {
        const { url, title } = this.props.note.info
        return <div onClick={this.stopPropagation} className='note-details'>
            <iframe src={url} frameborder="0"></iframe>
            <h2 className="details-layout">{title}</h2>
        </div>
    }
}