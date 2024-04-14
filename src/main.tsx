import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cnet } from "./components/view/Cnet.tsx";
import { Header } from "./components/cells/header/header.tsx";

const router = createBrowserRouter([
  {
    path: "/my-web-cv",
    element: <App />,
  },
  {
    path: "my-web-cv/cnet",
    element: <Cnet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
