const SlideShowThumb = (props) => {
  const { movies, changeMovieHandler } = props;
  return (
    <>
      {movies.map((movie, idx) => {
        return (
          <div
            key={idx}
            className="relative bg-no-repeat bg-cover bg-center w-[150px] xl:w-[200px] h-[70px] xl:h-[150px]"
            style={{
              backgroundImage: `url(${movie.bgImg})`,
              // height: 100,
              // width: 200,
            }}
            onClick={() => changeMovieHandler(idx)}
          >
            <div className="absolute bottom-0 left-0 px-3 py-3 w-full cursor-pointer">
              <div className="flex justify-between">
                <p className="text-white text-xs xl:text-xl">{movie.year}</p>
                <div className="rounded-3xl bg-sky-500 flex justify-center items-center w-8 h-5">
                  <p className="text-white">{movie.rating}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SlideShowThumb;
