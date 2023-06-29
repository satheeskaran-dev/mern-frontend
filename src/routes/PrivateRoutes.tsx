import { useRoutes, Navigate } from "react-router-dom";
import { UrlSlugType } from "../utils/enums/UrlSlug.enum";
import Home from "../pages/private/Home";
import PrivateLayout from "../layouts/Private";

const PrivateRoutes = () =>
  useRoutes([
    {
      element: <PrivateLayout />,
      children: [
        {
          path: UrlSlugType.HOME,
          element: <Home />,
        },
        { path: "*", element: <Navigate to={UrlSlugType.HOME} replace /> },
      ],
    },
  ]);

export default PrivateRoutes;
