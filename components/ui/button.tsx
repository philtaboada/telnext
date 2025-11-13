import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 active:scale-[0.98]";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-gradient-to-tr from-cyan-500 via-cyan-600 to-teal-500 text-white shadow-lg hover:shadow-xl hover:brightness-105",
  secondary:
    "bg-slate-900/70 text-slate-100 hover:bg-slate-900/90 dark:bg-slate-200/90 dark:text-slate-900 dark:hover:bg-slate-200",
  outline:
    "border border-cyan-300 bg-white text-slate-900 hover:bg-cyan-50 dark:border-cyan-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
  ghost:
    "bg-transparent text-slate-900 hover:bg-cyan-50 dark:text-slate-100 dark:hover:bg-slate-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-12 px-6",
  sm: "h-9 px-4 text-xs",
  lg: "h-14 px-8 text-base",
  icon: "h-10 w-10 rounded-full",
};

export function buttonClasses({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonClasses({ variant, size, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";


