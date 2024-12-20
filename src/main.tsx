import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>
);
