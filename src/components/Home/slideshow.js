import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideShowThumb from "./slideshowThumb";
// import { Button } from "@material-tailwind/react";

const Slideshow = () => {
  const movies = [
    {
      title: "You are not my mother",
      description:
        "n a North Dublin estate Char's mother goes missing. When she return Char is determined to uncover the truth of her disapperance and unearth the dark secrets of her family...",
      year: "2021",
      genre: "Horror",
      rating: "9",
      bgImg: "/img/sg1.png",
      img: "/img/bgg.png",
    },
    {
      title: "Attack on Finland",
      description:
        "Finland's Independence Day celebration on December 6 is crudely interrupted by an attack on the Presidential Palace. A set of distinguished guests are taken as hostages. Security service officer Max...",
      year: "2021",
      genre: "Action",
      rating: "8",
      bgImg: "/img/sg2.png",
      img: "/img/bgg2.jpg",
    },
    {
      title: "Chicken Hair and Tail",
      description:
        "Follows a young hero born half chicken and half hare. Eager to fit in and feel loved in spite of his differences, he is obsessed by adventuring in spite of his clumsiness....",
      year: "2022",
      genre: "cartoon",
      rating: "10",
      bgImg: "/img/sg3.png",
      img: "/img/bgg3.jpg",
    },
  ];
  const [selectedMovie, setSelectedMovie] = useState(0);
  const changeMovieHandler = (idx) => {
    setSelectedMovie(idx);
  };

  return (
    <>
      <div>
        <Carousel
          infiniteLoop
          interval={5000}
          showArrows={false}
          showThumbs={false}
          selectedItem={selectedMovie}
        >
          {movies.map((movie) => (
            <div
              className="w-100 h-[350px] xl:h-[600px]"
              style={{
                backgroundImage: `url(${movie.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="legend h-auto xl:h-5/6 flex flex-col top-0 gap-y-2 xl:gap-y-4 xl:justify-evenly"
                style={{
                  bottom: "initial",
                  backgroundColor: "transparent",
                  opacity: 1,
                  padding: 0,
                }}
              >
                <div className=" w-full xl:w-8/12 flex flex-col justify-center text-left">
                  <div className="mt-4 xl:mt-0 mb-3">
                    <p className="text-white text-xs xl:text-2xl py-1 xl:py-3">
                      Rating:{movie.rating}
                    </p>
                    <p className="text-white text-xs xl:text-2xl py-1">
                      {movie.year}, {movie.genre}: Movies
                    </p>
                    <p className="text-bold text-white text-xl xl:text-5xl xl:py-4">
                      {movie.title}
                    </p>
                    <p className="text-white w-full xl:w-9/12 text-xs xl:text-xl py-1 xl:py-4">
                      {movie.description}
                    </p>
                  </div>

                  <div className="flex justify-between p-3">
                    <div>
                      <a
                        href="/movie-detail"
                        className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-5 xl:w-36 xl:h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full"
                      >
                        Watch now
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-5 xl:w-36 xl:h-16 bg-slate-800 hover:bg-blue-700 text-white  rounded-full"
                      >
                        Trailer
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-5 xl:w-36 xl:h-16 bg-slate-800 hover:bg-blue-700 text-white    rounded-full"
                      >
                        Add to list
                      </a>
                    </div>

                    <button></button>
                    <button></button>
                  </div>
                </div>
                <div className="w-full h-auto m-0 xl:relative">
                  <div className="flex justify-center  xl:absolute xl:right-0 gap-x-1">
                    <SlideShowThumb
                      movies={movies}
                      changeMovieHandler={changeMovieHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default Slideshow;
