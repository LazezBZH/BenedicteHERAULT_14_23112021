import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import MyTable from "../../components/Table/MyTable";
import Footer from "../../components/Footer/Footer";
import "./Employees.css";

export default function Employees() {
  const employees = JSON.parse(localStorage.getItem("employees"));

  //console.log(employees);
  return (
    <div className="employees">
      <Banner />
      <div className="table">
        <MyTable employees={employees} />
      </div>

      <div className="employees-link">
        <Link to="/"> &#x21A9; Home</Link>x
      </div>
      <Footer />
    </div>
  );
}
