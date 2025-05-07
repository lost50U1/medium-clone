import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "@/hooks/useTheme";
import { useModals } from "@/hooks/useModals";
import { Link } from "react-router";

// todo: the sign in and sign up only appears in the home page doesnt appear on other pages fix that
export const Navbar = () => {
  const { theme } = useTheme();
  const { openModal } = useModals();
  return (
    <header className="max-w-7xl mx-auto w-full py-[18.5px] border-l border-r border-border px-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="w-40 h-auto">
          <Logo
            color={
              theme === "dark" || theme === "system" ? "#FFFFFF" : "#000000"
            }
          />
        </Link>
        <nav>
          <div className="flex gap-4 items-center">
            <Button
              className="max-sm:hidden"
              variant="secondary"
              onClick={() => openModal("signIn")}
            >
              Sign In
            </Button>
            <Button onClick={() => openModal("signUp")}>Get Started</Button>
            <div className="max-xs:hidden">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
