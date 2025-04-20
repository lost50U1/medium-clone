import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const SignInModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>This is the modal description.</DialogDescription>
        </DialogHeader>
        SignInModal<DialogFooter>footer</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
