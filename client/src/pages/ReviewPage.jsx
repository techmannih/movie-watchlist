import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../redux/action/MovieAction';

const ReviewForm = ({ movieId }) => {
    const [review, setReview] = useState('');
    const dispatch = useDispatch();

    const submitReview = (e) => {
        e.preventDefault();
        dispatch(reviewMovie(movieId, review));
        setReview('');
    };

    return (
        <form onSubmit={submitReview}>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here"
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
