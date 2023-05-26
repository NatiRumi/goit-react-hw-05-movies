import React from 'react';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useSearchParams, useLocation, Link } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { getMoviesName } from '../../API/Api';
import MoviesFilter from '../Movies/MoviesFilter';

const Movies = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const [moviesFilter, setMoviesFilter] = useState([]);
  const filter = searchparams.get('query') ?? '';
  // const location = useLocation()

  const handleSearch = request => {
    if (!request.trim()) {
      Notiflix.Notify.warning('Введіть значення для пошуку');
      return;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getMoviesName(filter);
      setMoviesFilter(response.data.results);
    };

    getData();
  }, [filter]);

  useEffect(() => {
    !filter && setSearchParams({});
  }, [filter, setSearchParams]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} setSearchParams={setSearchParams} />
      {moviesFilter.length > 0 && <MoviesFilter moviesFilter={moviesFilter} />}
    </>
  );
};

export default Movies;
