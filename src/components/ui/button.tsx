import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "border border-border bg-transparent text-text hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-0.5",
        ghost:
          "text-muted hover:text-text hover:bg-white/5",
        violet:
          "bg-violet text-white shadow-lg shadow-violet/20 hover:shadow-violet/40 hover:shadow-xl hover:-translate-y-0.5",
        outline:
          "border border-border-accent bg-accent/5 text-accent hover:bg-accent/10 hover:-translate-y-0.5",
        gradient:
          "text-white hover:-translate-y-0.5 hover:shadow-xl",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
        xl: "px-10 py-5 text-lg",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  gradient?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, gradient, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const gradientStyle =
      variant === "gradient" || gradient
        ? {
            background:
              "linear-gradient(135deg, #4F8CFF 0%, #7B61FF 50%, #35D6FF 100%)",
            backgroundSize: "200% 200%",
            ...style,
          }
        : style;

    return (
      <Comp
        className={cn(buttonVariants({ variant: gradient ? "gradient" : variant, size, className }))}
        ref={ref}
        style={gradientStyle}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
