import React from "react";
import SetIcons from "./SetIcons";
import "./button.css";

function Button(props) {
  const {
    variant,
    disableShadow,
    startIcon,
    endIcon,
    size,
    color,
    children,
  } = props;
  const _variant = variant || "default";
  const _size = size || "md";
  return (
    <button
      className={
        _variant +
        (disableShadow ? " no-shadow" : "") +
        " " +
        _size +
        " " +
        color
      }
      {...props}
    >
      <SetIcons iconName={startIcon} />
      {children}
      <SetIcons iconName={endIcon} />
    </button>
  );
}

export default Button;
