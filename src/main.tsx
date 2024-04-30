import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cnet } from "./components/view/Cnet.tsx";
import { Digitable } from "./components/view/Digitable.tsx";
import { Garpix } from "./components/view/Garpix.tsx";

const router = createBrowserRouter([
  {
    path: "/my-web-cv",
    element: <App />,
  },
  {
    path: "my-web-cv/cnet",
    element: <Cnet />,
  },
  {
    path: "my-web-cv/digitable",
    element: <Digitable />,
  },
  {
    path: "my-web-cv/garpix",
    element: <Garpix />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
