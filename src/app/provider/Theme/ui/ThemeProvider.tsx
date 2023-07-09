import { FC, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

const localTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const defaultTheme = localTheme ?? Theme.LIGHT

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
