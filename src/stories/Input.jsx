import React, { useEffect } from "react";
import SetIcons from "./SetIcons";
import "./Input.css";

var r = document.querySelector(":root");
function Input(props) {
  const {
    error,
    startIcon,
    endIcon,
    fullWidth,
    helperText,
    size,
    label,
    color,
    ismultiline,
    id,
    rows,
  } = props;
  const _id = id || "mytextarea";
  const _rows = rows || 4;
  if (color) r.style.setProperty("--input-color", color);
  const element = document.getElementById(_id);

  useEffect(() => {
    if (ismultiline && element) {
      r.style.setProperty(
        "--textarea-height",
        `${element.getBoundingClientRect().height}px`
      );
      r.style.setProperty(
        "--textarea-width",
        `${element.getBoundingClientRect().width}px`
      );
    }
  }, [fullWidth, ismultiline, rows, element]);

  return (
    <div className="input-container">
      <label htmlFor={`input-box`} className={`${error ? "error" : ""}`}>
        {label}
      </label>
      <div className="input-box-container">
        {startIcon ? (
          <span
            className={`box-icon icon-start ${size} ${
              ismultiline ? "multiline" : ""
            }`}
          >
            <SetIcons iconName={startIcon} size="1.6em" />
          </span>
        ) : null}
        {!ismultiline ? (
          <input
            {...props}
            id={_id}
            className={`${fullWidth ? "inherit-width" : ""} ${
              error ? "error" : ""
            } ${startIcon ? "add-icon-start" : ""} ${
              endIcon ? "add-icon-end" : ""
            } ${color ? "text-color" : ""} ${size}`}
          ></input>
        ) : (
          <textarea
            {...props}
            id={_id}
            rows={_rows}
            className={`${fullWidth ? "inherit-width" : ""} ${
              error ? "error" : ""
            } ${color ? "text-color" : ""} ${
              startIcon ? "add-icon-start" : ""
            } ${endIcon ? "add-icon-end" : ""}`}
          ></textarea>
        )}
        {endIcon ? (
          <span
            className={` box-icon icon-end${!fullWidth ? "-fixed-width" : ""} ${
              ismultiline ? "multiline" : ""
            } ${size}`}
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
