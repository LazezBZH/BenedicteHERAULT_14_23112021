import { Link } from "react-router-dom";

export default function Employees() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  console.log(employees);
  return (
    <div className="employees">
      <main>
        <div className="list-title">Liste des employés</div>
        <table>
          {employees.map((employee, index) => (
            <tbody key={index}>
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.etat}</td>
                <td>{employee.zipCode}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Link to="/">Home</Link>
      </main>
    </div>
  );
}
