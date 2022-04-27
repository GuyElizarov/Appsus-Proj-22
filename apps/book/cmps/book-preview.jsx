import { utilService } from '../../../services/util-service.js'
const { Link } = ReactRouterDOM

export function BookPreview({ book}) {
    const { amount, currencyCode } = book.listPrice
    return <Link to={`/book/${book.id}`}>
        <article className="book-preview">
            <img src={book.thumbnail} />
            <div className="info-container">
                <h2>{book.title}</h2>
                <h3> {amount}{utilService.getCurrencyIcon(currencyCode)} </h3>
            </div>
        </article>
    </Link>
}