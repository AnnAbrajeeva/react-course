import React, { type ButtonHTMLAttributes, type FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Button.module.scss"

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
  const isTheme = theme ? cls[theme] : ""
  return (
    <button className={classNames(cls.Button, {}, [className ?? "", isTheme])} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
