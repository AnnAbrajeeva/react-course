import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LandSwitcher"
import { useTranslation } from "react-i18next"

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ""])}>
      <button onClick={onToggle}>{t('Переключить')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}

export default Sidebar
