import React from "react";
import SetIcons from "./SetIcons";
import "./button.css";


function Button({
  variant = "default",
  disableShadow = false,
  disabled = false,
  startIcon="",
  endIcon="",
  size = "md",
  color = "",
  onClick,
  id,
  children,
}) {
  return (
    <button
      className={
        variant +
        (disableShadow ? " no-shadow" : "") +
        " " +
        size +
        " " +
        color
      }
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      <SetIcons iconName={startIcon}/>
      {children}
      <SetIcons iconName={endIcon}/>
    </button>
  );
}

export default Button;