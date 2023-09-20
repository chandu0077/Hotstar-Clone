import Slideshow from "./slideshow";
import Trending from "./trending";
import Sidebar from "../Common/sidebar";
import Recommended from "../Common/recommended";
// import {
//   trendingMovies,
//   popularMovies,
//   moreMovies,
//   series,
//   cartoons,
//   tv,
// } from "../Common/constants";
import Navbar from "../Common/navbar";
import Commonslider from "../Common/commonSlider";
import Contactus from "../Common/contactUs";
// import { slideshowMovies } from "../Common/constants";
import { useContext } from "react";
import MovieContext from "../../store/movie-context";
const Home = () => {
  const ctx = useContext(MovieContext);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full xl:w-11/12 ">
        <Navbar />
        <Contactus />
        {/* <RouterProvider router={router} /> */}
        <Slideshow />
        <Trending />
        <div id="popularMovies">
          <Commonslider type={"Popular"} movies={ctx.popularMovies} />
        </div>
        <div id="movies">
          <Commonslider type={"Movies"} movies={ctx.moreMovies} />
        </div>
        <div id="series">
          <Commonslider type={"Series"} movies={ctx.series} />
        </div>
        <div id="cartoons">
          <Commonslider type={"Cartoons"} movies={ctx.cartoons} />
        </div>
        <div id="tv">
          <Commonslider type={"Tv+"} movies={ctx.tv} />
        </div>
        <div id="recommended">
          <Recommended />
        </div>
      </div>
    </div>
  );
};
export default Home;
