import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Main from "../pages/Main";
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from "./consts";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTER_ROUTE,
    Component: Register
  },
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile
  },
];
