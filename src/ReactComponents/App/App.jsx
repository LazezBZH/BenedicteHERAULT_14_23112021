import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "../components/Header/Header";

import "./App.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Employees = lazy(() => import("../pages/Employees/Employees"));
const Error = lazy(() => import("../pages/Error/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
