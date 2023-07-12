import { useRoutes, Navigate } from "react-router-dom";
import { UrlSlugType } from "../utils/enums/UrlSlug.enum";
import PrivateLayout from "../layouts/Private";
import Home from "../pages/private/Home";
import Preferences from "../pages/private/Preferences";

const PrivateRoutes = () =>
  useRoutes([
    {
      element: <PrivateLayout />,
      children: [
        {
          path: UrlSlugType.HOME,
          element: <Home />,
        },
        { path: UrlSlugType.PREFERENCES, element: <Preferences /> },
        { path: "*", element: <Navigate to={UrlSlugType.HOME} replace /> },
      ],
    },
  ]);

export default PrivateRoutes;
