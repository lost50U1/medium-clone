import React from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Line } from "../components/Line";

export const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Line />
      <div className="bg-secondary max-w-[1192px] mx-auto w-full flex-1">
        Home
      </div>
      <Line />
      <Footer />
    </main>
  );
};
