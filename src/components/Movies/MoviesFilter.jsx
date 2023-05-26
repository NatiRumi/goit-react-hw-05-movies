import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesFilter = ({moviesFilter}) => {
    const location = useLocation();
    return (
        <ul>
        {moviesFilter.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()} state={location}>{movie.title}</Link>
        </li>
        ))}
      </ul>
    )
}

export default MoviesFilter;
