import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 p-8 shadow-sm backdrop-blur transition-all dark:border-slate-800/60 dark:bg-slate-900/80",
        interactive && "hover:-translate-y-1 hover:shadow-2xl",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100", className)}
      {...props}
    />
  ),
);

CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400", className)}
      {...props}
    />
  ),
);

CardDescription.displayName = "CardDescription";


