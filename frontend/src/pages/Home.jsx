import React from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Line } from "../components/Line";
import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Line />
      <div className="max-w-7xl mx-auto w-full flex-1 border-l border-r border-border px-4">
        <div className="flex flex-col min-h-[calc(100vh-8.9rem)] items-center justify-center">
          <h1 className="text-6xl font-bold text-center mt-10 w-3/5">
            Share your thoughts with the world
          </h1>
          <p className="mt-4 text-2xl text-center w-1/2 text-foreground/70">
            LiteBlog is a minimalist blogging platform where ideas shine in the
            dark.
          </p>
          <Button className="mt-8">Start Writing</Button>
        </div>
      </div>
      <Line />
      <Footer />
    </main>
  );
};
