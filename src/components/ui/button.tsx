// src/components/ui/button.tsx
import { cn } from "@/lib/cn";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      default:
        "bg-white text-gray-800 hover:bg-pink-50 border border-gray-200",
      primary: "bg-pink-400 text-white hover:bg-pink-500",
      outline:
        "bg-transparent border border-pink-300 text-pink-400 hover:bg-pink-50",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

