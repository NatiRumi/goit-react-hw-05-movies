import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesFilter = ({ moviesFilter }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesFilter.map(movie => (
        <li key={movie.id}>
          <Link to={movie.id.toString()} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesFilter;

MoviesFilter.propTypes = {
  moviesFilter: PropTypes.array,
};