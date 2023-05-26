import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMoviesDetails } from '../../API/Api';
import css from './MovieStyle.module.css';

const MoviesDetails = () => {
  const [movies, setMovies] = useState([]);
  const [img, setImg] = useState('');
  const [genres, setGenres] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/');

  useEffect(() => {
    const getData = async id => {
      const response = await getMoviesDetails(Number(id));
      const path =
        'https://image.tmdb.org/t/p/w500' + response.data.poster_path;

      setMovies(response.data);
      setImg(path);

      const getGenres = array => {
        if (array.length > 0) {
          const allGenres = [];
          array.forEach(item => {
            const genreName = item.name;
            if (!genreName) {
              return;
            }
            allGenres.push(genreName);
          });
          return allGenres.join(', ');
        } else {
          return '';
        }
      };
      setGenres(getGenres(response.data.genres));
    };

    getData(id);
  }, [id]);

  const handleClick = () => {
    navigate(backLinkLocationRef.current);
  };

  return (
    <div>
      <button type="button" className={css.button} onClick={handleClick}>
        Go back
      </button>
      <div className={css.movieContainer}>
        <img src={img} alt={movies.title} className={css.movieImg}></img>
        <div className={css.movieInfo}>
          <h2>
            {movies.title} ({movies.release_date})
          </h2>
          <p>Popularity {(movies.vote_average * 10).toFixed(0)}%</p>
          <h3>Overviev</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
