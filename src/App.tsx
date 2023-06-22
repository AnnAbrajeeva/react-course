import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage.lazy";
import { AboutPage } from "./pages/AboutPage/AboutPage.lazy";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import UseTheme from "./theme/UseTheme";
import { classNames } from "./helpers/classNames/classNames";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames('app', {}, [theme || ''])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
