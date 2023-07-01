import { Link } from "react-router-dom";
import { classNames } from "../shared/lib/classNames/classNames";
import {UseTheme} from "./provider/Theme/index";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";

function App() {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme || ""])}>
      <Navbar />
      <AppRouter />
      
    </div>
  );
}

export default App;
