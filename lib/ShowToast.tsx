"use client";

import { useTheme } from "next-themes";
import { toast, Toaster as Sonner } from "sonner";

type ToastType = "success" | "error" | "warning";

const showToast = (type: ToastType, message: string) => {
  toast[type](message);
};

const Toaster = () => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as React.ComponentProps<typeof Sonner>["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
};

export { Toaster, showToast };
