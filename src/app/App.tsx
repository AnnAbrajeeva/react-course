import { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { UseTheme } from "./provider/Theme/index";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div>
      <button onClick={toggle}>{t('Перевод')}</button>
      <p>{t("Тестовый пример")}</p>
    </div>
  );
};

function App() {
  const { theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme || ""])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
