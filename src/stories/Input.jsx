import React from "react";
import SetIcons from "./SetIcons";
import "./Input.css";

var r = document.querySelector(":root");
function Input(props) {
  const {
    error,
    startIcon,
    endIcon,
    inherit_width,
    helperText,
    label,
    color,
  } = props;
  if (color) r.style.setProperty("--input-color", color);
  return (
    <div className="input-container">
      <label htmlFor={`input-box`} className={`${error ? "error" : ""}`}>
        {label}
      </label>
      <div className="input-box-container">
        {startIcon ? (
          <span className="box-icon icon-start">
            <SetIcons iconName={startIcon} size="1.6em" />
          </span>
        ) : null}
        <input
          {...props}
          className={`${inherit_width ? "inherit-width" : ""} ${
            error ? "error" : ""
          } ${startIcon ? "add-icon-start" : ""} ${
            endIcon ? "add-icon-end" : ""
          } ${color ? "text-color" : ""}`}
        ></input>
        {endIcon ? (
          <span
            className={` box-icon icon-end${
              !inherit_width ? "-fixed-width" : ""
            }`}
          >
            <SetIcons iconName={endIcon} size="1.6em" />
          </span>
        ) : null}
      </div>
      <p className={`${error ? "error" : ""}`}>{helperText}</p>
    </div>
  );
}

export default Input;
