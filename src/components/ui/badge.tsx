import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "violet" | "cyan" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-white/5 text-muted border border-border",
    accent:
      "bg-accent/10 text-accent border border-accent/20",
    violet:
      "bg-violet/10 text-violet border border-violet/20",
    cyan:
      "bg-cyan/10 text-cyan border border-cyan/20",
    outline:
      "bg-transparent text-muted border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
