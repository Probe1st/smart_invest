import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Registration";
import Main from "../pages/main/Main";
import { ERROR_PAGE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from "./consts";

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
  {
    path: ERROR_PAGE,
    Component: ErrorPage
  }
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile
  },
];
