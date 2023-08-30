import Home from "./components/Home/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Moviedetail from "./components/MovieDetail/movieDetail";
import { movieDetail } from "./components/Common/constants";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    {
      path: "/movie-detail",
      element: <Moviedetail movieDetail={movieDetail} />,
    },
  ],
  { basename: "/Hotstar-Clone" },
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
