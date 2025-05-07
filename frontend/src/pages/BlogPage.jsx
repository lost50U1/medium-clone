import React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { useParams } from "react-router";

export const BlogPage = () => {
  const { id } = useParams();

  return (
    <MainLayout>
      <div>
        <h1>Blog Title</h1>
        <p>blog {id}</p>
      </div>
    </MainLayout>
  );
};
