import React from "react";
import Home from "../../pages/Home";
import { createBrowserRouter as Router } from "react-router-dom";
import Landing from "../../pages/Landing";

const router = Router([
  { path: "/", element: <Home /> },
  { path: "/landing", element: <Landing /> },
]);

export default router;
