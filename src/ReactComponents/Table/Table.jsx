import "./Table.css";

export default function Table() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  console.log(employees);
  return (
    <main>
      <div className="table-title">Current Employees</div>
      <table>
        <colgroup>
          <col className="table-col1" span="2"></col>
          <col className="table-col2" span="2"></col>
        </colgroup>
        <thead id="table-thead">
          <tr>
            <th className="table-th1">First Name</th>
            <th className="table-th1">Last Name</th>

            <th className="table-th2">Start Date</th>
            <th className="table-th2">Department</th>

            <th className="table-th3">Date of Birth</th>
            <th className="table-th3">Street</th>
            <th className="table-th3">City</th>
            <th className="table-th3">State</th>
            <th className="table-th3">Zip Code</th>
          </tr>
        </thead>
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
    </main>
  );
}
