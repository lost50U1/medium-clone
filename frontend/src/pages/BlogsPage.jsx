import React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { blogs } from "@/data/mockData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// todo add author name, image , time stamp and time it takes to read
export const BlogsPage = () => {
  return (
    <MainLayout>
      {/* header  */}
      <div className="mb-10">
        <h1 className="heading mb-4">Blogs</h1>
        <p className="mt-4 text-base md:text-xl text-center text-foreground/70">
          A collection of thoughts, tutorials, and insights.
        </p>
      </div>
      {/* blogs list */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 mb-10">
        {blogs.map((blog) => (
          <Card key={blog.id} className="flex flex-col gap-4 py-4">
            <CardContent className="px-4">
              <div className="w-full h-48 mb-6">
                <img
                  src={blog.imageUrl}
                  alt="blog cover"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {blog.description}
              </p>
              <div class="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground"></div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <Button key={index} variant="secondary" size="sm">
                  #{tag}
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* pagination  */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </MainLayout>
  );
};
