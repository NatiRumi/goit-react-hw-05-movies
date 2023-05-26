import React from 'react';
import MoviesDetails from 'components/Movies/MoviesDetails';
import Additional from 'components/Additional/Additional';
import css from '../Movies/MovieStyle.module.css';

const MovieDetails = () => {
  return (
    <div className={css.container}>
      <MoviesDetails />
      <Additional />
    </div>
  );
};

export default MovieDetails;
