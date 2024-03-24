// NotFoundPage.js

import React from "react";
import classes from "./NotFoundPage.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/notfound.json";

export default function NotFoundPage() {
  return (
    <div className={classes.container}>
      <div className={classes.animationWrapper}>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}
