import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { Paths } from "./Paths";

import { Home } from "@/pages/Home";
import { BlogsPage } from "@/pages/BlogsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { BlogPage } from "@/pages/BlogPage";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProfilePage } from "@/pages/dashboard/ProfilePage";
import { WriteBlogPage } from "@/pages/dashboard/WriteBlogPage";
import { MyBlogPage } from "@/pages/dashboard/MyBlogPage";

export const AppRouter = () => {
  const [user, setUser] = useState("text");
  return (
    <Routes>
      <Route path={Paths.home} element={<Home />} />
      <Route
        path={Paths.dashboard}
        element={
          <ProtectedRoute user={user}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path={Paths.profile} element={<ProfilePage />} />
        <Route path={Paths.writeBlog} element={<WriteBlogPage />} />
        <Route path={Paths.myBlog} element={<MyBlogPage />} />
      </Route>
      <Route path={Paths.blog} element={<BlogPage />} />
      <Route path={Paths.blogs} element={<BlogsPage />} />
      <Route path={Paths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
