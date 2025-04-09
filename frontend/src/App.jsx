import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}
