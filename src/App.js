import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import Business from "./pages/Business/Business";
import Firms from "./pages/Firms/Firms";
import RootLayout from "./components/RootLayout/RootLayout";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "businesses",
        element: <RootLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Business />,
          },
        ],
      },
      {
        path: "firms",
        element: <RootLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Firms />,
          },
        ],
      },
      {
        path: "blog",
        element: <RootLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Blog />,
          },
          {
            path: "/blog/:id",
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
