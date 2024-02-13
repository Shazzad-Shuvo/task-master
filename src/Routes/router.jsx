import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home/>},
      {path: '/task', element: <h2>All tasks</h2>}
    ]
  },
]);
