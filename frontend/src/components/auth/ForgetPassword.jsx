import React, { useState } from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ForgotPassword = ({ onNavigate }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your password reset logic here (e.g., call API)
    console.log("Reset password for:", email);
  };

  return (
    <>
      <DialogHeader className="text-center items-center">
        <DialogTitle className="text-2xl font-bold">Reset Password</DialogTitle>
        <DialogDescription>
          Enter your email and we’ll send you a reset link.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div className="grid gap-2">
          <Label htmlFor="reset-email">Email</Label>
          <Input
            id="reset-email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </DialogFooter>
      </form>
      <div className="mt-4 text-sm text-center">
        <Button variant="link" onClick={() => onNavigate("signIn")}>
          Back to login
        </Button>
      </div>
    </>
  );
};
