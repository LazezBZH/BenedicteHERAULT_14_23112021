import React from "react";

import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import MyTable from "../../components/Table/MyTable";
import labels from "../../../data/labels";
import "./Employees.css";

export default function Employees() {
  const employees = JSON.parse(localStorage.getItem("employees"));

  return (
    <div className="employees">
      <Banner />
      <div className="table">
        <MyTable labels={labels} data={employees} />
      </div>

      <div className="employees-link">
        <Link to="/"> &#x21A9; Home</Link>
      </div>
      <Footer />
    </div>
  );
}
