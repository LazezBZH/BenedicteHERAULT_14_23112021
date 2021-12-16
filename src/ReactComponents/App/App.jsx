import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Header from "../components/Header/Header";
//import Footer from "../components/Footer/Footer";
//import Home from "../pages/Home/Home";
//import Employees from "../pages/Employees/Employees";

import "./App.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Employees = lazy(() => import("../pages/Employees/Employees"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Chargement...</div>}>
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
