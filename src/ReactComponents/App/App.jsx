import { Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Employees from "../pages/Employees/Employees";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
