import Review from '../Review/Review';
import useReviews from '../Hooks/useReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
        <div className='container mx-auto flex justify-center items-center'>
                <h1 className='author text-9xl text-red-500 mx-auto'>Reviews</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
        </div>
            
            
        </div>
    );
};

export default Reviews;