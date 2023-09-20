import Home from "./components/Home/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Moviedetail from "./components/MovieDetail/movieDetail";
// import { movieDetail } from "./components/Common/constants";
import MovieProvider from "./store/MovieProvider";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    {
      path: "/movie-detail",
      element: <Moviedetail />,
    },
  ],
  { basename: "/Hotstar-Clone" },
);

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
