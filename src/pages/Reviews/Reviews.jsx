import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(match.params.movieId);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [match.params.movieId]);

  return (
    <div>
      <h2>Огляди</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;