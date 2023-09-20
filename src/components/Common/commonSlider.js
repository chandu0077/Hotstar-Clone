import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useRef } from "react";

import Slider from "react-slick";
// import { render } from "@testing-library/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../../store/movie-context";
const Commonslider = (props) => {
  const { movies, type } = props;
  const commonCtx = useContext(MovieContext);
  const sliderRef = useRef();
  const navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  // const previousSlide = () => {
  //   sliderRef.current.slickPrev();
  // };

  // const nextSlide = () => {
  //   console.log(sliderRef);
  //   sliderRef.current.slickNext();
  // };

  return (
    <div className="py-5">
      <div className="flex justify-between">
        <div className="flex">
          <h2 className="text-white text-lg  xl:text-4xl p-3">{type}</h2>
          {/* <p className="text-sm xl:text-xl p-5 hover text-slate-300">More</p> */}
        </div>
        <div className="flex p-5">
          <div className="hidden xl:block">
            <div className="" style={{ textAlign: "center" }}>
              <button
                onClick={commonCtx.previousSlide}
                className="text-xl text-gray-400 p-5 hover:text-sky-700"
              >
                <i className="fa fa-angle-left fa-lg"></i>
              </button>
              <button
                onClick={commonCtx.nextSlide}
                className="text-xl text-gray-400 hover:text-sky-700 p-5"
              >
                <i className="fa fa-angle-right fa-lg "></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full" id="popularMovies">
        <div className="h-40 xl:h-64">
          <Slider {...settings} ref={sliderRef}>
            {movies.map((trendingMovie, idx) => (
              <div
                key={idx}
                className="relative p-2 h-32 xl:h-auto bg-no-repeat bg-cover bg-top rounded-lg"
              >
                <div
                  className="relative h-32 xl:h-60 cursor-pointer"
                  onClick={() => navigate("/movie-detail")}
                  style={{
                    width: "auto",
                    // height: "150px",
                  }}
                >
                  <img
                    alt="movie posters"
                    src={trendingMovie.backgroundImg}
                    className="absolute w-full h-full top-0 opacity-80"
                  />
                  <div
                    className="absolute w-full bottom-0 left-0 p-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom,rgba(0,0,0,0),#101010)",
                    }}
                  >
                    <h2 className="text-white text-md xl:text-2xl">
                      {trendingMovie.title}
                    </h2>
                    <div className="flex text-white text-base gap-x-1.5 my-3">
                      <p className="text-slate-400 text-xs xl:text-lg ">
                        {trendingMovie.year} • {trendingMovie.genre} •
                        {trendingMovie.views} VIEWS
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-10 relative">
                    <div
                      className="absolute top-3 right-2 w-7 h-8 xl:w-10 xl:h-10"
                      // style={{ width: 56, height: 55 }}
                    >
                      <CircularProgressbar
                        value={trendingMovie.rating}
                        maxValue={10}
                        text={`${trendingMovie.rating * 1}`}
                        strokeWidth={10}
                        // styles={buildStyles({
                        //   pathColor: "#5865f2",
                        // })}
                        styles={{
                          text: {
                            fill: "#ffff",
                            fontSize: "42px",
                          },
                          background: {
                            fill: "#5865f2",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Commonslider;
