import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'API/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async id => {
      const response = await getMoviesReviews(Number(id));

      setReviews(response.data.results);
    };

    getData(id);
  }, [id]);

  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}

      {reviews.length > 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
