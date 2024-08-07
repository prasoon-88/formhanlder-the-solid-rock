import { HTMLProps } from "react";
import { Radius } from "../../types/atoms";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  varient?: "flat" | "bordered" | "faded" | "underlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";
  radius?: Radius;
  buttonSize?: "sm" | "md" | "lg";
}
