import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="all-form">
        <div className="form-header">
          <div className="form-name">HRnet</div>
          <Link to="/employees">View Current Employees</Link>
          <div className="form-description">Create Employee</div>
        </div>
        <Form />
      </div>
    </div>
  );
}
