import Navbar from "../Common/navbar";
import Sidebar from "../Common/sidebar";
import Contactus from "../Common/contactUs";
import MovieStills from "./movieStills";
import MovieAbout from "./MovieAbout";
import Herosection from "./heroSection";
import Movietitle from "./movieTitle";

const Moviedetail = (props) => {
  const { movieDetail } = props;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full xl:w-11/12 ">
        <Navbar />
        <Contactus />
        <div
          className="w-full h-full p-[12px] xl:p-[35px] bg-no-repeat bg-right xl:bg-right-top"
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),#101010),url(${movieDetail.movieBanner})`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom,rgba(0,0,0,0),#101010)",
            }}
          >
            <Movietitle movieDetail={movieDetail} />
            <Herosection movieDetail={movieDetail} />
            <MovieAbout movieDetail={movieDetail} />
            <MovieStills stills={movieDetail.stills} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moviedetail;
