export class BookFilter extends React.Component {

    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: ''
        }
    }

    handleChange = ({ target }) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }


    get maxPriceVal() {
        const { maxPrice } = this.state.filterBy
        return maxPrice === 0 ? '' : maxPrice
    }
    get minPriceVal() {
        const { minPrice } = this.state.filterBy
        return minPrice === 0 ? '' : minPrice
    }

    
    render() {
        const { title } = this.state.filterBy
        return <section className="book-filter" >
            <form onSubmit={this.onFilter}>
                <label> Min Price: <input type="number" value={this.minPriceVal} onChange={this.handleChange} name="minPrice" placeholder="by min price" /> </label>
                <label> Max Price: <input type="number" value={this.maxPriceVal} onChange={this.handleChange} name="maxPrice" placeholder="by max price" /> </label>
                <label> Title: <input type="text" value={title} onChange={this.handleChange} name="title" placeholder="by title" /> </label>
                <button>Submit</button>
            </form>
        </section>
    }
}