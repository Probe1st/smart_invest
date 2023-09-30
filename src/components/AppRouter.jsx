import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../utils/routes";
import { useContext } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import ErrorPage from "../pages/ErrorPage";

export default function AppRouter() {
  let { auth } = useContext(Context);
  const user = useAuthState(auth);

  return user[0] ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} Component={Component} />;
      })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} Component={Component} />;
      })}
      <Route key={"/error"} path="/*" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} Component={Component} />;
      })}
      <Route key={"/error"} path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
