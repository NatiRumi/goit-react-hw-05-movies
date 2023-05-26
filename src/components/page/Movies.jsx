import React from 'react';
import Notiflix from 'notiflix';
import SearchBar from 'components/SearchBar/SearchBar';

const Movies = () => {
  const handleSearch = request => {
    if (!request.trim()) {
      Notiflix.Notify.warning('Введіть значення для пошуку');
      return;
    }

    console.log(request.trim());
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
};

export default Movies;
