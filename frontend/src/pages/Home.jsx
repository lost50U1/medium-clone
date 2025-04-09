import React from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Line } from "../components/Line";

export const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Line />
      <div className="max-w-7xl mx-auto w-full flex-1 border-l border-r border-border px-4">
        Home
      </div>
      <Line />
      <Footer />
    </main>
  );
};
