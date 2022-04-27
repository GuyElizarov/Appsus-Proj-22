
import { bookService } from "../services/book-service.js"
import { utilService } from '../../../services/util-service.js'
import { LongText } from '../../../cmps/long-text.jsx'
import { Loader } from "../../../cmps/loader.jsx"
import { ReviewList } from "../cmps/review-list.jsx"
import { ReviewAdd } from "../cmps/review-add.jsx"

export class BookDetails extends React.Component {

    state = {
        book: NaN
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getById(bookId)
            .then(book => {
                if (!book) return this.props.history.push('/')
                this.setState({ book })
            })
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }

    onRemoveBook = () => {
        bookService.remove(this.state.book.id).then(this.onGoBack)
    }

    onRemoveReview = (reviewIdx, bookId) => {
        bookService.removeReview(bookId, reviewIdx)
            .then(this.loadBook)
    }

    onSaveReview = (review) => {
        const { bookId } = this.props.match.params
        bookService.addReview(review, bookId)
            .then(this.loadBook)
    }

    render() {
        const { book } = this.state
        const lang = utilService.getLangByLangCode(book.language)
        const currYear = new Date().getFullYear()
        if (!book) return <Loader color="black" />
        return <section className="book-details">
            <img src={book.thumbnail} />
            <h2>{book.title}</h2>
            <h3> {book.subtitle}</h3>

            <h5> Author/s: {book.authors}</h5>
            <h5> Published at: {book.publishedDate}-
                {(currYear - book.publishedDate) > 10 && <span> Veteran book</span>}
                {(currYear - book.publishedDate) <= 1 && <span> New book!</span>}
            </h5>
            <h5> Categories: {book.categories}</h5>

            <h5 className="desc"> Description: <LongText text={book.description} /></h5>
            <h5> Pages: {book.pageCount}
                {book.pageCount > 500 && <span> - Long reading </span>}
                {book.pageCount > 200 && book.pageCount < 500 && <span> - Decent reading </span>}
                {book.pageCount < 200 && <span> - Light reading </span>}
            </h5>
            <h5> Price:
                {book.listPrice.amount < 150 && book.listPrice.amount > 20 && <span> {book.listPrice.amount} </span>}
                {book.listPrice.amount > 150 && <span style={{ color: "red" }}> {book.listPrice.amount} </span>}
                {book.listPrice.amount < 20 && <span style={{ color: "green" }}> {book.listPrice.amount} </span>}
            </h5>
            <h5>Language: {lang}</h5>
            {book.listPrice.isOnSale && <h5 className="sale"> ON SALE! </h5>}

            <button onClick={this.onGoBack}>Go Back!</button>
            <button onClick={this.onRemoveBook}>Delete</button>

            <ReviewList reviews={book.reviews} bookId={book.id} onRemoveReview={this.onRemoveReview} />
            <ReviewAdd onSaveReview={this.onSaveReview} />

        </section>
    }
}



