export class ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: '',
            rate: '',
            date: '',
            comment: '',
        }
    }

    onAddReview = (ev) => {
        ev.preventDefault()
        this.props.onSaveReview(this.state.review)
        this.setState({
            review: {
                fullName: '',
                rate: '',
                date: '',
                comment: '',
            }
        })
    }

    handleChange = ({ target }) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ review: { ...prevState.review, [field]: value } }))
    }

    render() {
        const { fullName, rate, date, comment } = this.state.review
        return <section className="review-add">
                <form onSubmit={this.onAddReview}>
                    <label> Full Name: <input type="text" value={fullName} name="fullName" onChange={this.handleChange} /> </label>

                    <label> Rating: <select value={rate} name="rate" onChange={this.handleChange}>
                        <option value="1">1 Star!</option>
                        <option value="2">2 Stars!</option>
                        <option value="3">3 Stars!</option>
                        <option value="4">4 Stars!</option>
                        <option value="5">5 Stars!</option>
                    </select></label>
                    <label> Read At? <input  type="date" value={date} name="date" onChange={this.handleChange}/></label>
                    <label> Comment: <input type="textArea" value={comment} onChange={this.handleChange} name="comment" /> </label>
                    <button>Submit</button>
                </form>
            </section>
        
    }
}