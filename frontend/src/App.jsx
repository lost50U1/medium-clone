import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router";
import { ThemeProvider } from "./context/ThemeProvider";
import { ModalsProvider } from "./context/modalsContext/ModalsProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <ModalsProvider>
        <Router>
          <AppRouter />
        </Router>
      </ModalsProvider>
    </ThemeProvider>
  );
}
