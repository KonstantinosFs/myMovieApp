import React from "react";
import MoviesCard from "../Movies/MoviesCard";

import styles from "./Home.module.css";

const Home = (props) => {
  let top10 = [];
  let top10favorites = [
    props.movies[0],
    props.movies[5],
    props.movies[8],
    props.movies[45],
    props.movies[20],
    props.movies[99],
    props.movies[90],
    props.movies[44],
    props.movies[52],
    props.movies[76],
  ];
  for (let index = 0; index < 10; index++) {
    top10.push(props.movies[index]);
  }

  return (
    <React.Fragment>
      <div className="container text-center">
        <h1 style={{ color: "white" }}>TOP 10 Movies</h1>
      </div>
      <div className={styles["movies-container"]}>
        {top10.map((movie) => (
          <MoviesCard key={Math.random()} movie={movie} />
        ))}
      </div>
      <div className="container text-center">
        <h1 style={{ color: "white" }}>TOP 10 Favorite Movies</h1>
      </div>
      <div className={styles["movies-container"]}>
        {top10favorites.map((movie) => (
          <MoviesCard key={Math.random()} movie={movie} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
