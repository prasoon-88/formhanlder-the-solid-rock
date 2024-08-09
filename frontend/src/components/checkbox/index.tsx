import React, { ReactNode } from "react";
import cx from "classnames";
import { Color, Radius, Size } from "../../types/atoms";

interface CheckboxProps {
  children?: ReactNode;
  label?: string;
  color?: Color;
  size?: Size;
  disabled?: boolean;
  radius?: Radius;
  state?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({
  children,
  label,
  color = "default",
  size = "lg",
  disabled = false,
  radius = "sm",
  state = false,
  className,
  onChange,
}: CheckboxProps) => {
  return (
    <label className={cx("checkbox-wrapper", className)}>
      <input
        type="checkbox"
        id="checkbox"
        checked={state}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className={cx(`color-${color}`, `size-${size}`, `radius-${radius}`, {
          "is-disabled": disabled,
        })}
      />
      {label && <span className="checkbox-label">{label}</span>}
      {children && <div className="checkbox-children">{children}</div>}
    </label>
  );
};

export default Checkbox;
