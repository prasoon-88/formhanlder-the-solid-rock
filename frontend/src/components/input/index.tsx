import "./index.scss";
import cx from "classnames";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const {
    label,
    varient = "bordered",
    color = "default",
    buttonSize = "sm",
    radius = "sm",
    ...rest
  } = props;
  return (
    <div
      id="myInputContainer"
      className={cx(
        `varient-${varient}`,
        `color-${color}`,
        `buttonSize-${buttonSize}`,
        `radius-${radius}`
      )}
    >
      {label ? <div className="inputLabel">{label}</div> : <></>}
      <input {...rest} />
    </div>
  );
};

export default Input;
