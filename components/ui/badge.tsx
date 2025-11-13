import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success";
}

const variantClasses = {
  default:
    "bg-gradient-to-tr from-sky-600 via-indigo-500 to-purple-500 text-white",
  outline:
    "border border-slate-300 text-slate-600 dark:border-slate-700 dark:text-slate-300",
  success:
    "bg-emerald-500/10 text-emerald-600 ring-1 ring-inset ring-emerald-500/30",
} as const;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";


