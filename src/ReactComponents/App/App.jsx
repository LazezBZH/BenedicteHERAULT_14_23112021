import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "../components/Header/Header";

import "./App.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Employees = lazy(() => import("../pages/Employees/Employees"));

function App() {
  // const employees = JSON.parse(localStorage.getItem("employees"));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
