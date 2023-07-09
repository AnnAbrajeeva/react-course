/* eslint-disable react/jsx-indent */
import { Loader } from "shared/ui/Loader";
import cls from "./PageLoader.module.scss";

const PageLoader = () => {
  return (
    <div className={cls.page_loader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
