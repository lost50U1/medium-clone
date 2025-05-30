import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { Paths } from "./Paths";
import { Home } from "@/pages/Home";
import { BlogsPage } from "@/pages/BlogsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { BlogPage } from "@/pages/BlogPage";

// todo: 5 pages remaining
export const AppRouter = () => {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      <Route
        path={Paths.dashboard}
        element={
          <ProtectedRoute user={user}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      {/* since profile , settings , create blogs , my blogs page will be under dashboard they will be children routes of dashboard */}
      {/* <Route path={Paths.profile} element={<ProfilePage />} /> */}
      {/* <Route path={Paths.settings} element={<SettingsPage />} /> */}
      <Route path={Paths.blog} element={<BlogPage />} />
      <Route path={Paths.blogs} element={<BlogsPage />} />
      <Route path={Paths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
