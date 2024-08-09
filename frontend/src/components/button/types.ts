import { ReactNode } from "react";
import { Radius, Size, Color, Varient } from "../../types/atoms";

export interface ButtonProps {
  children: ReactNode;
  size?: Size;
  radius?: Radius;
  trailingIcon?: ReactNode;
  variant?: Varient;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  color?: Color;
}

// type Varient = "solid" | "bordered" | "light" | "flat" | "faded" | "ghost";

// type Color = "primary" | "secondary" | "success" | "danger" | "warning";
