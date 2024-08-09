import { HTMLProps } from "react";
import { Color, Radius } from "../../types/atoms";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  varient?: "flat" | "bordered" | "faded" | "underlined";
  color?:Color;
  radius?: Radius;
  buttonSize?: "sm" | "md" | "lg";
}
