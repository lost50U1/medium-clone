import React from "react";
import { Routes, Route } from "react-router";
import { Paths } from "./Paths";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      {/* <Route path={Paths.login} element={<Login />} /> */}
      {/* <Route path={Paths.signup} element={<Signup />} /> */}
      {/* <Route path={Paths.dashboard} element={<Dashboard />} /> */}
      {/* <Route path={Paths.profile} element={<Profile />} /> */}
      {/* <Route path={Paths.settings} element={<Settings />} /> */}
      {/* <Route path={Paths.about} element={<About />} /> */}
      {/* <Route path={Paths.blog} element={<Blog />} /> */}
      {/* <Route path={Paths.notFound} element={<NotFound />} /> */}
    </Routes>
  );
};
