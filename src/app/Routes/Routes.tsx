import { createBrowserRouter } from "react-router-dom";
import { pageConfig } from "../../config/pageConfig";

import Main from "../layouts/Main";
import RegisterPage from "../../pages/register/RegisterPage";
import AuthorizationPage from "../../pages/authorization/AuthorizationPage";

export const Router = createBrowserRouter([
  {
    path: pageConfig.home,
    element: <Main />,
    children: [
      {
        path: pageConfig.register,
        element: <RegisterPage />
      },
      {
        path: pageConfig.auth,
        element: <AuthorizationPage />
      }
    ]
  },
]);
