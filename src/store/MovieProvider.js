import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  slideshowMovies,
  trendingMovies,
  popularMovies,
  moreMovies,
  series,
  cartoons,
  tv,
  movieDetail,
} from "../components/Common/constants";

import { useRef, useState } from "react";

import MovieContext from "./movie-context";

const MovieProvider = (props) => {
  const sliderRef = useRef();

  const [selectedMovie, setSelectedMovie] = useState(0);

  const changeMovieHandler = (idx) => {
    setSelectedMovie(idx);
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    console.log(sliderRef);
    sliderRef.current.slickNext();
  };

  const moviecontext = {
    slideshowMovies: slideshowMovies,
    trendingMovies: trendingMovies,
    popularMovies: popularMovies,
    moreMovies: moreMovies,
    series: series,
    cartoons: cartoons,
    tv: tv,
    movieDetail: movieDetail,
    selectedMovie: selectedMovie,
    changeMovieHandler: changeMovieHandler,
    previousSlide: previousSlide,
    nextSlide: nextSlide,
  };
  console.log(";;;", moviecontext);
  return (
    <MovieContext.Provider value={moviecontext}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
