import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = false, glow = false, gradient = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-surface",
        "border-white/[0.08]",
        hover && "glass-hover card-shine cursor-pointer",
        glow && "glow-accent",
        gradient && "gradient-border",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl glass p-6",
        hover && "glass-hover card-shine",
        className
      )}
    >
      {children}
    </div>
  );
}
