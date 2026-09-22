import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "light" | "dark";
};

export function Button({ className = "", tone = "dark", ...props }: ButtonProps) {
  return (
    <button
      className={`action-button action-button--${tone} ${className}`}
      {...props}
    />
  );
}
