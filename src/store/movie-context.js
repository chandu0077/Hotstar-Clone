import React from "react";

const MovieContext = React.createContext({
  slideshowMovies: [],
  trendingMovies: [],
  popularMovies: [],
  moreMovies: [],
  series: [],
  cartoons: [],
  tv: [],
  movieDetail: {},
  selectedMovie: 0,
  changeMovieHandler: (idx) => {},
  previousSlide: () => {},
  nextSlide: () => {},
});
export default MovieContext;
