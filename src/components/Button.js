import React, { useState, useEffect } from "react";
import "./Button.css";

function Button({
  variant = "",
  disableShadow = false,
  disabled = false,
  iconPosition = "",
  size = "",
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
        color +
        " " +
        iconPosition
      }
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {/* <i class="material-icons">search</i> */}
      {children}
    </button>
  );
}

export default Button;
