import React from "react";

import styles from "./Button.module.css";
import classNames from "classnames";
import sassStyles from "./Button.module.scss";

const Button = () => {
  return (
    <button className={classNames(styles.primary, styles.enabled, sassStyles.thing, sassStyles.better)}>
      Button
    </button>
  );
};

export default Button;
