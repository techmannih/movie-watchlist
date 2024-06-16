import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie } from '../redux/action/MovieAction';

const StarRating = ({ movieId }) => {
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const handleRating = (rate) => {
        setRating(rate);
        dispatch(rateMovie(movieId, rate));
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
