import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Callback } from "../pages/callback";
import { FAQ } from "../pages/faq";
import { Term } from "../pages/term-of-use";
import { Notebook } from "../pages/notebook";
import { Phone } from "../pages/phone";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notebook",
    element: <Notebook />,
  },
  {
    path: "/phone",
    element: <Phone />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/term",
    element: <Term />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
