import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Context from "./store/Context";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import BookMarked from "./pages/BookMarked";
import Auth from "./pages/Auth";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "movies",
            element: <Movies />,
          },
          { path: "series", element: <TvShows /> },
          { path: "book-marked", element: <BookMarked /> },
        ],
      },
    ],
  },
  { path: "/auth", element: <Auth /> },
]);

function App() {
  const context = useContext(Context);
  const { shows } = useContext(Context);
  const { data } = useFetch(
    "https://react-cf940-default-rtdb.firebaseio.com/media.json"
  );

  useEffect(() => {
    context.setShows(data);
    context.setFilteredShows(data);
  }, [data]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
