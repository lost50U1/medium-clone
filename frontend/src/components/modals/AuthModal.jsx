import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
import { ForgotPassword } from "../auth/ForgetPassword";

export const AuthModal = ({ open, onClose, view, onChangeView }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6 md:p-8">
        {view === "signIn" && <SignIn onNavigate={onChangeView} />}
        {view === "signUp" && <SignUp onNavigate={onChangeView} />}
        {view === "forgotPassword" && (
          <ForgotPassword onNavigate={onChangeView} />
        )}
      </DialogContent>
    </Dialog>
  );
};
