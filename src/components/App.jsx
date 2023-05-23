import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./page/Home";
import Gallery from "./page/Gallery";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='home' element={<Home />}></Route>
        <Route path='movies' element={<Gallery />}></Route>
      </Route> 
    </Routes>
  );
};

export default App;
