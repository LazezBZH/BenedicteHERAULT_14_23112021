import { Link } from "react-router-dom";
import Table from "../../Table/Table";
import "./Employees.css";

export default function Employees() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  console.log(employees);
  return (
    <div className="employees">
      <Table />
      <div className="employees-link">
        <Link to="/"> &#x21A9; Home</Link>
      </div>
    </div>
  );
}
