import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../ui/ThemeContext"

interface UseThemeResult {
  toggleTheme: () => void
  theme?: Theme
}

function UseTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setTheme != null) {
      setTheme(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  return { theme, toggleTheme }
}

export default UseTheme
