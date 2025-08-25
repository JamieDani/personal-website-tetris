import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Card as ShadcnCard,
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card";

import "./styles/retro.css";

export const cardVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
  },
});

export interface BitCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

function Card({ ...props }: BitCardProps) {
  const { className, font, variant } = props;

  return (
    <div className="relative">
      <ShadcnCard
        {...props}
        className={cn(
          "rounded-none border-0 relative !bg-primary !text-white",
          font !== "normal" && "retro",
          variant === "default" && "!bg-primary !text-white",
          variant === "destructive" && "!bg-primary !text-white",
          variant === "outline" && "!bg-primary !text-white",
          variant === "secondary" && "!bg-secondary !text-secondary-foreground",
          variant === "ghost" && "hover:!bg-accent hover:!text-accent-foreground",
          className
        )}
      />
      
      {/* Pixelated border - matching button style */}
      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
      <div className="absolute top-0 left-0 size-1.5 bg-border" />
      <div className="absolute top-0 right-0 size-1.5 bg-border" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-border" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-border" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-border" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-border" />
      
      {/* Top shadow */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
    </div>
  );
}

function CardHeader({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardHeader
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

function CardTitle({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardTitle
      className={cn(
        font !== "normal" && "retro",
        "!text-white text-xl font-bold",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardDescription
      className={cn(
        font !== "normal" && "retro",
        "!text-white/70",
        className
      )}
      {...props}
    />
  );
}

function CardAction({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardAction
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

function CardContent({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardContent
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

function CardFooter({ ...props }: BitCardProps) {
  const { className, font } = props;

  return (
    <ShadcnCardFooter
      data-slot="card-footer"
      className={cn(font !== "normal" && "retro", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
