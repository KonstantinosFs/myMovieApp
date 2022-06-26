import Card from "../UI/Card";

import styles from "./MoviesList.module.css";

const MoviesCard = (props) => {
  // pattern movies[0].d[0]
  // const movieName = props.movies[1].d[0].l;
  // const movieYear = props.movies[1].d[0].y;
  // const movieStars = props.movies[1].d[0].s;
  // const moviePoster = props.movies[1].d[0].i.imageUrl;

  const movieName = props.movie.d[0].l;
  const movieYear = props.movie.d[0].y;
  const movieStars = props.movie.d[0].s;
  const moviePoster = props.movie.d[0].i.imageUrl;

  return (
    <Card className={styles.movie}>
      <div className={styles["movies-img--wrapper"]}>
        <img
          className={styles["movies-img"]}
          src={moviePoster}
          alt={movieName}
        ></img>
      </div>
      <div className={styles["movies-details"]}>
        <div className={styles["movies-details--nameyear"]}>
          {movieName} ({movieYear})
        </div>
        <div className={styles["movies-details--stars"]}>{movieStars}</div>
      </div>
    </Card>
  );
};

export default MoviesCard;
