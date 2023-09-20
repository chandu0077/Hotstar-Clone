import Navbar from "../Common/navbar";
import Sidebar from "../Common/sidebar";
import Contactus from "../Common/contactUs";
import MovieStills from "./movieStills";
import MovieAbout from "./MovieAbout";
import Herosection from "./heroSection";
import Movietitle from "./movieTitle";
import { useContext } from "react";
import MovieContext from "../../store/movie-context";
const Moviedetail = () => {
  // const { movieDetail } = props;

  const movieCtx = useContext(MovieContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full xl:w-11/12 ">
        <Navbar />
        <Contactus />
        <div
          className="w-full h-full p-[12px] xl:p-[35px] bg-no-repeat bg-right xl:bg-right-top"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),#101010),url(${movieCtx.movieDetail.movieBanner})`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom,rgba(0,0,0,0),#101010)",
            }}
          >
            <Movietitle />
            <Herosection />
            <MovieAbout />
            <MovieStills />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moviedetail;
