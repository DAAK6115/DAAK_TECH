import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "dark";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
  };

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-daak-blue text-daak-navy hover:bg-daak-cyan hover:shadow-[0_10px_30px_rgba(0,180,255,.4)]",

  secondary:
    "border border-daak-blue bg-transparent text-daak-blue hover:bg-daak-blue hover:text-daak-navy",

  ghost:
    "bg-transparent text-current hover:bg-black/5",

  dark:
    "bg-daak-navy text-white hover:bg-[#102846]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold",
        "transition-all duration-200",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          <span>Chargement...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}