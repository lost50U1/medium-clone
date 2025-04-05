import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router";

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
