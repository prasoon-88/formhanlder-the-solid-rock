import cx from "classnames";
import { ButtonProps } from "./types";
import "./index.scss";

const Button = ({
  children,
  size = "md",
  trailingIcon = <></>,
  buttonProps,
  radius = "md",
  variant = "solid",
  color,
}: ButtonProps) => {
  return (
    <button
      id="button"
      {...buttonProps}
      className={cx(
        `size-${size}`,
        `radius-${radius}`,
        `variant-${variant}`,
        `color-${color}`,
        buttonProps?.className
      )}
    >
      <div>{children}</div>
      {trailingIcon}
    </button>
  );
};

export default Button;
