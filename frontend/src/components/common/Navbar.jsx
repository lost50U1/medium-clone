import React from "react";
import { Button } from "../ui/button";
import { Logo } from "../Logo";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <header className="max-w-7xl mx-auto w-full py-[18.5px] border-l border-r border-border px-4">
      <div className="flex justify-between items-center">
        <div className="w-40 h-auto">
          {/* <img src={Logo} alt="logo" className="w-full h-full object-cover" /> */}
          <Logo
            color={theme === "dark" || theme === "system" ? "white" : "black"}
          />
        </div>
        <nav>
          <div className="flex gap-4 items-center">
            <Button className="max-sm:hidden" variant="secondary">
              Sign In
            </Button>
            <Button>Get Started</Button>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};
