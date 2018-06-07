import Home from "../../pages/home/Home";
import NotFound from "../../pages/error/NotFound";

export default [
  {
    name: "home",
    path: "/",
    exact: true,
    render: Home
  },
  {
    name: "not-found",
    render: NotFound
  }
];
