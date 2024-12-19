import { createBrowserRouter } from "react-router-dom";
import { pageConfig } from "../../config/pageConfig";

import Main from "../layouts/Main";
import RegisterPage from "../../pages/register/RegisterPage";

export const Router = createBrowserRouter([
  {
    path: pageConfig.home,
    element: <Main />,
    children: [
      {
        path: pageConfig.register,
        element: <RegisterPage />
      },
    ]
  },
]);
