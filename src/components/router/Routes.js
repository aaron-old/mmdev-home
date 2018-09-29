import Home from "../../pages/home/Home";
import NotFound from "../../pages/error/NotFound";
import About from "../../pages/about/About";

export default [
  {
    name: "home",
    path: "/",
    exact: true,
    render: Home
  },
  {
    name: "about",
    path: "/about",
    exact: true,
    render: About
  },
  {
    name: "not-found",
    render: NotFound
  }
];
