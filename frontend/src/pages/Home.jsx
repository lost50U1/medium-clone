import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Paths } from "@/router/Paths";
import { useModals } from "@/hooks/useModals";
import { AuthModal } from "@/components/modals/AuthModal";
import { MainLayout } from "@/layouts/MainLayout";

export const Home = () => {
  const { state, openModal, closeModal } = useModals();

  const [authView, setAuthView] = useState("signIn");

  const handleOpen = state.signIn || state.signUp;
  const handleClose = () => {
    closeModal("signIn");
    closeModal("signUp");
  };

  useEffect(() => {
    if (state.signUp) setAuthView("signUp");
    else if (state.signIn) setAuthView("signIn");
  }, [state.signUp, state.signIn]);

  return (
    <>
      <MainLayout centered>
        <h1 className="text-2xl md:text-6xl font-bold text-center mt-10 md:w-3/5">
          Share your thoughts with the world
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-center md:w-1/2 text-foreground/70">
          LiteBlog is a minimalist blogging platform where ideas shine in the
          dark.
        </p>
        <div className="flex gap-4 mt-8">
          <Button onClick={() => openModal("signIn")}>Start Writing</Button>
          <Button variant="secondary" asChild>
            <Link to={Paths.blogs}>Read Blogs</Link>
          </Button>
        </div>
      </MainLayout>

      <AuthModal
        open={handleOpen}
        onClose={handleClose}
        view={authView}
        onChangeView={setAuthView}
      />
    </>
  );
};
