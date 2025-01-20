import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import FavoritesPage from "@/pages/FavoritesPage";
import MainPage from "@/pages/MainPage";

import Layout from "./Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>,
  ),
  { basename: import.meta.env.VITE_BASENAME },
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
