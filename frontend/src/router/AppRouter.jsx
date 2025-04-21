import React from "react";
import { Routes, Route } from "react-router";
import { Paths } from "./Paths";
import { Home } from "@/pages/Home";
import { BlogsPage } from "@/pages/BlogsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { DashboardPage } from "@/pages/DashboardPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      <Route path={Paths.dashboard} element={<DashboardPage />} />
      {/* <Route path={Paths.profile} element={<ProfilePage />} /> */}
      {/* <Route path={Paths.settings} element={<SettingsPage />} /> */}
      {/* <Route path={Paths.about} element={<AboutPage />} /> */}
      {/* <Route path={Paths.blog} element={<BlogPage />} /> */}
      <Route path={Paths.blogs} element={<BlogsPage />} />
      <Route path={Paths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
