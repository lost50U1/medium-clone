import React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Button variant="outline" onClick={handleGoHome}>
        Go Home
      </Button>
    </MainLayout>
  );
};
