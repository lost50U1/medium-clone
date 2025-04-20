import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Line } from "@/components/Line";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Paths } from "@/router/Paths";
import { SignInModal } from "@/components/modals/SignInModal";
import { useModals } from "@/hooks/useModals";

export const Home = () => {
  const { state, closeModal } = useModals();
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <Line />
        <div className="max-w-7xl mx-auto w-full flex-1 border-l border-r border-border px-4">
          <div className="flex flex-col min-h-[calc(100vh-8.9rem)] items-center justify-center">
            <h1 className="text-2xl md:text-6xl font-bold text-center mt-10 md:w-3/5">
              Share your thoughts with the world
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-center md:w-1/2 text-foreground/70">
              LiteBlog is a minimalist blogging platform where ideas shine in
              the dark.
            </p>
            <div className="flex gap-4 mt-8">
              <Button>Start Writing</Button>
              <Button variant="secondary" asChild>
                <Link to={Paths.blogs}>Read Blogs</Link>
              </Button>
            </div>
          </div>
        </div>
        <Line />
        <Footer />
      </main>
      <SignInModal open={state.signIn} onClose={() => closeModal("signIn")} />
    </>
  );
};
