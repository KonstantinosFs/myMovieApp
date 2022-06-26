import { useEffect } from "react";
import axios from "axios";

import Top100Movies from "../data/top100Movies.json";
import Top100MovieTitles from "../data/top100MovieTitles.json";

const API = () => {
  console.log("API HIT");
  let movies;
  let apiMovies = [];

  const getTop100MovieTitles = async () => {
    const apiOptions = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies",
      params: {
        currentCountry: "US",
        purchaseCountry: "US",
        homeCountry: "US",
      },
      headers: {
        "X-RapidAPI-Key": "440154fcdbmsh9812d928ffb3d33p1b0379jsn4aa7870d3635",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    axios
      .request(apiOptions)
      .then(function (response) {
        let movieTitles = response.data;
        localStorage.setItem("top100MovieTitles", JSON.stringify(movieTitles));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const filterMovieTitles = () => {
    let movieTitles = localStorage.getItem("top100MovieTitles");
    // deserializing:
    let movieTitlesObj = JSON.parse(movieTitles);
    let filteredMovieTitlesObj = [];
    movieTitlesObj.forEach((element) => {
      filteredMovieTitlesObj.push(element.split("/")[2]);
    });
    return filteredMovieTitlesObj;
  };

  const getTop100Movies = async () => {
    let movieTitles = filterMovieTitles();

    for (let index = 0; index < 3; index++) {
      const apiOptions = {
        method: "GET",
        url: "https://online-movie-database.p.rapidapi.com/auto-complete",
        params: { q: `${movieTitles[index]}` },
        headers: {
          "X-RapidAPI-Key":
            "440154fcdbmsh9812d928ffb3d33p1b0379jsn4aa7870d3635",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      await axios
        .request(apiOptions)
        .then(function (response) {
          apiMovies.push(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    console.log(apiMovies);
    localStorage.setItem("apiMovies", JSON.stringify(apiMovies));
  };

  useEffect(() => {
    //getTop100MovieTitles();
    if (localStorage.getItem("top100MovieTitles") != null) {
      //console.log("GET 100 movies");
      //getTop100Movies();
    }
  }, []);

  // NO API CALLS
  if (localStorage.getItem("check")) {
    movies = JSON.parse(localStorage.getItem("Top100Movies"));
    // movies = JSON.parse(localStorage.getItem("top100Movies"));
    // movies = JSON.parse(localStorage.getItem("apiMovies"));
  } else {
    localStorage.setItem("Top100Movies", JSON.stringify(Top100Movies));
    localStorage.setItem("Top100MovieTitles", JSON.stringify(Top100MovieTitles));
    //localStorage.setItem("apiMovies", JSON.stringify(movies));
    localStorage.setItem("check", true);
  }

  return movies;
};

export default API;
