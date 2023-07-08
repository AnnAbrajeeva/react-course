import { Theme, UseTheme } from "app/provider/Theme";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarktIcon from "shared/assets/icons/theme-dark.svg";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className || ""])} onClick={toggleTheme}>
      <img src={theme === Theme.LIGHT ? LightIcon : DarktIcon} alt="" />
    </Button>
  );
};

export default ThemeSwitcher;