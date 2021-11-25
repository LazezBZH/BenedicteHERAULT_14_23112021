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
                <td key={employee.firstName}>{employee.firstName}</td>
                <td key={employee.lastName}>{employee.lastName}</td>
                <td key={employee.startDate}>{employee.startDate}</td>
                <td key={employee.department}>{employee.department}</td>
                <td key={employee.birthDate}>{employee.birthDate}</td>
                <td key={employee.street}>{employee.street}</td>
                <td key={employee.city}>{employee.city}</td>
                <td key={employee.etat}>{employee.etat}</td>
                <td key={employee.zipCode}>{employee.zipCode}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Link to="/">Home</Link>
      </main>
    </div>
  );
}
