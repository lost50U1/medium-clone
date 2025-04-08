import React from "react";
import { Logo } from "../../assets";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="max-w-[1192px] mx-auto w-full py-[18.5px]">
      <div className="flex justify-between items-center">
        <div className="w-40 h-auto">
          <img src={Logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>Sign in</li>
            <li>Get Started</li>
            <Button>Click me</Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
