import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import API from "./components/API";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import MoviesList from "./components/Movies/MoviesList";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  var movies = API();

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home movies={movies} />} />
          <Route path="/movies" element={<MoviesList movies={movies} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
