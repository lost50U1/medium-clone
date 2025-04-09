import React from "react";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto w-full py-5 border-l border-r border-border px-4 text-foreground/70 text-center">
      &copy; {new Date().getFullYear()} LiteBlog. All rights reserved.
    </footer>
  );
};
