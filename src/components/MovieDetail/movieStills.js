// import Navbar from "../Common/navbar";
// import Sidebar from "../Common/sidebar";
// import Contactus from "../Common/contactUs";
// import { CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import MovieContext from "../../store/movie-context";
const MovieStills = () => {
  // const { stills } = props;
  const stilsCtx = useContext(MovieContext);
  // console.log("///", stilsCtx.movieDetail.stills);
  return (
    <div className="w-full h-[250px] mt-20 xl:w-4/5 xl:h-[250px]">
      <h2 className="text-white text-xl text-bold ">Stills</h2>
      <div className="flex flex-wrap gap-x-1">
        {stilsCtx.movieDetail.stills.map((still, idx) => (
          <div key={idx} className="max-w-[150px] xl:max-w-[250px]">
            <img
              className="w-full h-auto xl:h-full xl:w-[235.85px]"
              src={still}
              alt="still1"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieStills;
