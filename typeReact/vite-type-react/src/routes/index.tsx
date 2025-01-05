import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import SnowFall from "./page/snow/SnowFall";
import Root from "./page/root/Root";
import Home from "./page/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "<div>곧 뭔가 있지 않을까요..?</div>",
    children: [
      {
        path: "*",
        loader: async () => redirect("/"),
      },
      {
        path: "",
        element: <Root />,
      },
      {
        path: "/snow",
        element: <SnowFall />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
