import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./sections/Home";
import Browse from "./sections/Browse";
import HomeBody from "./components/HomeBody";
import Login from "./sections/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MoviePage from "./components/MoviePage";
import BrowseMain from "./sections/BrowseMain";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <HomeBody />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/browse",
    element: <BrowseMain />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <main className="bg-black text-white">
        <main className="max-container">
          <RouterProvider router={appRoutes} />
        </main>
      </main>
    </Provider>
  );
}

export default App;
