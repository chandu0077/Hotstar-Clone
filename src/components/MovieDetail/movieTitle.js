const Movietitle = (props) => {
  const { movieDetail } = props;
  return (
    <div className="xl:p-[30px] w-5/5 xl:w-4/5">
      <h2 className="text-white text-center text-2xl xl:text-4xl font-bold xl:pt-12">
        {movieDetail.movieTitle}
      </h2>
      <p className="text-gray-200 text-xs xl:text-sm text-center xl:pt-4">
        {movieDetail.Tagline}
      </p>
      <div className="flex justify-center space-x-5 text-white text-center pt-5 xl:pt-8">
        <div>
          <p className="text-2xl xl:text-3xl font-bold">
            {movieDetail.imdbRating}/
            <span className="text-xs xl:text-sm">10</span>
          </p>
          <span className="text-xs xl:text-sm text-gray-300">IMDB</span>
        </div>
        <div>
          <p className="text-2xl xl:text-3xl font-bold">
            {movieDetail.metaScoreRating}/
            <span className="text-xs xl:text-sm">100</span>
          </p>
          <span className="text-xs xl:text-sm text-gray-300">Metascore</span>
        </div>
        <div>
          <p className="text-2xl xl:text-3xl font-bold">
            {movieDetail.saiScoreRating}/
            <span className="text-xs xl:text-sm">10</span>
          </p>
          <span className="text-xs xl:text-sm text-gray-300">SAI</span>
        </div>
      </div>
    </div>
  );
};
export default Movietitle;
