import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout'
import HomePage from "./page/HomePage";
import Movies from "./page/Movies";
import MovieDetails from "./page/MovieDetails";
import Cast from "./Additional/Cast";
import Reviews from "./Additional/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />}></Route>
        <Route path='movies' element={<Movies />}>
          
        </Route>
        <Route path=':id' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
        </Route>
        
      </Route> 
    </Routes>
  );
};

export default App;
