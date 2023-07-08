import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper"> {element} </div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
