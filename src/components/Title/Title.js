import React from "react";
import classes from "./Title.module.css";

export default function Title({ title, fontSize, margin }) {
  return (
    <h1
      style={{ fontSize, margin, color: "#616161" }}
      className={classes.title}
    >
      {title}
    </h1>
  );
}
