import React from "react";

import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import "./Error.css";

export default function EmployeesBis() {
  return (
    <div className="employees">
      <Banner />
      <div className="error">
        <div className="error-link">
          <Link to="/"> &#x21A9; Home &#x1F3E1; &#x1F3E1;</Link>
        </div>
        <p>Error, this page doesn't exit!</p>
        <div className="error-link">
          <Link to="/employees">
            &#x1F3A0; &#x1F3A0; Current Employees &#x21AA;
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
