import { useRoutes, Navigate } from "react-router-dom";
import { UrlSlugType } from "../utils/enums/UrlSlug.enum";
import Login from "../pages/auth/Login";
import AuthLayout from "../layouts/Auth";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Activate from "../pages/auth/Activate";
import SSOCallback from "../pages/auth/SsoCallback";

const PublicRoutes = () =>
  useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: UrlSlugType.LOGIN,
          element: <Login />,
        },
        {
          path: UrlSlugType.SIGN_UP,
          element: <Signup />,
        },
        {
          path: UrlSlugType.FORGOT_PASSWORD,
          element: <ForgotPassword />,
        },
        {
          path: UrlSlugType.RESET_PASSWORD,
          element: <ResetPassword />,
        },
        {
          path: UrlSlugType.USER_ACTIVATE,
          element: <Activate />,
        },
        { path: "*", element: <Navigate to={UrlSlugType.LOGIN} replace /> },
      ],
    },
    {
      path: UrlSlugType.SSO_CALL_BACK,
      element: <SSOCallback />,
    },
  ]);

export default PublicRoutes;
