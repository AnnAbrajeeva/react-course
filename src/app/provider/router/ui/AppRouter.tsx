import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouteConfig).map(({ element, path }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper"> {element} </div>
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
