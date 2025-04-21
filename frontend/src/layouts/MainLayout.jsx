import React from "react";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { Line } from "@/components/Line";

export const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Line />
      <div className="max-w-7xl mx-auto w-full flex-1 border-l border-r border-border px-4">
        <div className="flex flex-col min-h-[calc(100vh-8.9rem)] items-center justify-center">
          {children}
        </div>
      </div>
      <Line />
      <Footer />
    </main>
  );
};
