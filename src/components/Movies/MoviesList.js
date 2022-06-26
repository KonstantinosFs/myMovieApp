import React from "react";

import MoviesCard from "./MoviesCard";

import styles from "./MoviesList.module.css";

const MoviesList = (props) => {
  let top20 = [];
  for (let index = 0; index < 20; index++) {
    top20.push(props.movies[index]);
  }

  return (
    <React.Fragment>
      <div className="container text-center">
        <h1 style={{ color: "white" }}>TOP 20 Movies</h1>
      </div>
      <div className={styles["movies-container"]}>
        {top20.map((movie) => (
          <MoviesCard key={movie.d[0].id} movie={movie} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
