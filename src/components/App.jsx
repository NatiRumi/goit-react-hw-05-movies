import React, { lazy }  from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './page/HomePage';
import Movies from './page/Movies';
import MovieDetails from './page/MovieDetails';
import NotFound from './page/NotFound';
// import Cast from './Additional/Cast';
// import Reviews from './Additional/Reviews';

const Cast = lazy(() => import('./Additional/Cast'));
const Reviews = lazy(() => import('./Additional/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
