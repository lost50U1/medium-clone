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
import { Separator } from "@/components/ui/separator";
import { dateFormatter } from "@/utils/dateFormatter";

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
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <Card className="flex flex-col gap-4 py-4">
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
                {/* more info  */}
                <div className="mb-2 mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground h-5">
                  <div className="flex items-center gap-x-1.5">
                    <span className="relative flex shrink-0 overflow-hidden size-5 rounded-full">
                      <img
                        className="aspect-square size-full"
                        alt="enscribe"
                        src={blog.authorImageUrl}
                      />
                    </span>
                    <span>{blog.authorName}</span>
                  </div>
                  <Separator orientation="vertical" />
                  <div>{dateFormatter(blog.date)}</div>
                  <Separator orientation="vertical" />
                  <div>{blog.readTime} min read</div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 px-4">
                {blog.tags.map((tag, index) => (
                  <Button key={index} variant="secondary" size="sm">
                    #{tag}
                  </Button>
                ))}
              </CardFooter>
            </Card>
          </Link>
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
