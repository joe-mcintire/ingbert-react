import React, { ReactNode } from "react";

import classNames from "classnames";
import css from "./Button.module.scss";
import { Theme } from "../../enums";
import { ThemeCssName } from "../../dictionaries";

type ButtonProps = {
  className?: string;
  theme?: Theme;
  children?: ReactNode;
};

const Button = ({ className, theme = Theme.Cool, children }: ButtonProps) => {
  return (
    <button
      className={classNames(css.button, css[ThemeCssName[theme]], className)}
    >
      {children}
    </button>
  );
};

export default Button;
