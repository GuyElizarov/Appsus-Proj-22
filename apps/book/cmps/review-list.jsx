import { ReviewPreview } from './review-preview.jsx'

export function ReviewList({ reviews ,bookId, onRemoveReview}) {
    if (!reviews||!reviews.length) return <React.Fragment></React.Fragment>
    return <section className="reviews-list">
        {reviews.map((review, index) => <ReviewPreview bookId={bookId} onRemoveReview={onRemoveReview} 
        review={review} reviewIdx={index} key={review.id}/>)}
    </section>
}