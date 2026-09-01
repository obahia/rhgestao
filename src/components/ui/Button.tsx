import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-[0.9rem]",
  lg: "px-7 py-3.5 text-[0.98rem]",
};

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-cyan-500 text-petrol-950 hover:bg-cyan-400 shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset]",
  secondary:
    "border border-current/25 text-current hover:border-current/50 hover:bg-white/5",
  ghost: "text-current hover:opacity-70",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`;

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon ? (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </button>
  );
}
