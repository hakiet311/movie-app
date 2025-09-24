import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import MovieDetailPage from "./page/MovieDetailPage.jsx";
import RootLayout from "./page/RootLayout.jsx";
import TVShowPage from "./page/TVShowPage.jsx";
import ModalProvider from "./Context/ModalProvider.jsx";
import ActorPage from "./page/ActorPage.jsx";
import SearchPage from "./page/SearchPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage></MovieDetailPage>,
      },
      {
        path: "/tv/:id",
        element: <TVShowPage></TVShowPage>,
      },
      {
        path: "/person/:id",
        element: <ActorPage></ActorPage>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>
);
