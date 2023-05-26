import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilmsList } from '../../API/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFilmsList();
        // console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.filter(movie =>{ return (movie.title)}).map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>{movie.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


