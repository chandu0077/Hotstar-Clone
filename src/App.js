// import NavDropdown from "react-bootstrap/NavDropdown";
// import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";
import Home from "./components/Home/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Moviedetail from "./components/MovieDetail/movieDetail";
import { movieDetail } from "./components/Common/constants";

const router = createBrowserRouter([
  { path: "/Hotstar-Clone/", element: <Home /> },
  {
    path: "/Hotstar-Clone/movie-detail",
    element: <Moviedetail movieDetail={movieDetail} />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
