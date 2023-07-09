import React, { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = ({ children, to, className, theme = AppLinkTheme.PRIMARY }) => {
  return (
    <div>
      <Link to={to} className={classNames(cls.AppLink, {}, [cls[theme], className ?? ''])}>{children}</Link>
    </div>
  )
}

export default AppLink
