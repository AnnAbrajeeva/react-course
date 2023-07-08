import { Suspense } from "react";
import { classNames } from "../shared/lib/classNames/classNames";
import { UseTheme } from "./provider/Theme/index";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function App() {
  const { theme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme || ""])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
