import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie } from '../redux/action/MovieAction';
import './rating.css';

const StarRating = ({ movieId }) => {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const handleRating = (rate) => {
        setRating(rate);
        dispatch(rateMovie(movieId, rate));
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    className={star <= rating ? 'active' : ''}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
