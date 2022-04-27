export function ReviewPreview({ bookId, onRemoveReview, review, reviewIdx }) {
    return <section className="review">
        <p>Publisher Name: {review.fullName}</p>
        <p>stars: {review.rate}</p>
        <p>Date of review: {review.date}</p>
        <p>Comment: {review.comment}</p>
        <button onClick={() => {
            onRemoveReview(reviewIdx, bookId)
        }}>x</button>
    </section>
}