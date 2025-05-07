import React from "react";
import { useParams } from "react-router";
import { blogs } from "@/data/mockData";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BlogPage = () => {
  const { id } = useParams();
  const selectedBlog = blogs.find((blog) => blog.id === id);

  if (!selectedBlog) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto p-6">
          <p className="text-red-600 text-lg">Blog not found</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-muted-foreground">
                {selectedBlog.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold">{selectedBlog.title}</h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <img
            src={selectedBlog.authorImageUrl}
            alt={selectedBlog.authorName}
            className="w-10 h-10 rounded-full"
          />
          <span>{selectedBlog.authorName}</span>
          <span>•</span>
          <span>{selectedBlog.date}</span>
          <span>•</span>
          <span>{selectedBlog.readTime} min read</span>
        </div>

        {/* Image */}
        <img
          src={selectedBlog.imageUrl}
          alt="Blog cover"
          className="w-full h-auto rounded-lg"
        />

        {/* Description */}
        <p className="text-lg text-muted-foreground">
          {selectedBlog.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {selectedBlog.tags.map((tag, index) => (
            <Button key={index} variant="secondary" size="sm">
              #{tag}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8 pt-4">
          {selectedBlog.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <div key={index}>
                  {block.title && (
                    <h2 className="text-2xl font-semibold mb-2">
                      {block.title}
                    </h2>
                  )}
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {block.paragraph}
                  </p>
                </div>
              );
            }

            if (block.type === "image") {
              return (
                <div key={index} className="space-y-2">
                  {block.title && (
                    <h2 className="text-2xl font-semibold">{block.title}</h2>
                  )}
                  <img
                    src={block.imageUrl}
                    alt={block.title}
                    className="w-full h-auto rounded-lg"
                  />
                  {block.paragraph && (
                    <p className="text-base text-muted-foreground">
                      {block.paragraph}
                    </p>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </MainLayout>
  );
};
