import React from "react";
import "./Table.css";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const MyTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.datas);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption className="table-title">Current Employees</caption>
      <colgroup>
        <col className="table-col1" span="2"></col>
        <col className="table-col2" span="2"></col>
      </colgroup>
      <thead>
        <tr>
          <th className="table-th1">
            <button
              type="button"
              onClick={() => requestSort("firstName")}
              className={getClassNamesFor("firstName")}
            >
              First Name
            </button>
          </th>
          <th className="table-th1">
            <button
              type="button"
              onClick={() => requestSort("lastName")}
              className={getClassNamesFor("lastName")}
            >
              Last Name
            </button>
          </th>
          <th table-th2>
            <button
              type="button"
              onClick={() => requestSort("startDate")}
              className={getClassNamesFor("startDate")}
            >
              Start Date
            </button>
          </th>
          <th table-th2>
            <button
              type="button"
              onClick={() => requestSort("department")}
              className={getClassNamesFor("department")}
            >
              Department
            </button>
          </th>
          <th className="table-th3">
            <button
              type="button"
              onClick={() => requestSort("birthDate")}
              className={getClassNamesFor("birthDate")}
            >
              Date of Birth
            </button>
          </th>
          <th className="table-th3">
            <button
              type="button"
              onClick={() => requestSort("street")}
              className={getClassNamesFor("street")}
            >
              Street
            </button>
          </th>
          <th className="table-th3">
            <button
              type="button"
              onClick={() => requestSort("city")}
              className={getClassNamesFor("city")}
            >
              City
            </button>
          </th>
          <th className="table-th3">
            <button
              type="button"
              onClick={() => requestSort("etat")}
              className={getClassNamesFor("etat")}
            >
              State
            </button>
          </th>
          <th className="table-th3">
            <button
              type="button"
              onClick={() => requestSort("zipCode")}
              className={getClassNamesFor("zipCode")}
            >
              Zip Code
            </button>
          </th>
        </tr>
      </thead>

      {items.map((item, index) => (
        <tbody key={index}>
          <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.startDate}</td>
            <td>{item.department}</td>
            <td>{item.birthDate}</td>
            <td>{item.street}</td>
            <td>{item.city}</td>
            <td>{item.etat}</td>
            <td>{item.zipCode}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default function Table() {
  const employees = JSON.parse(localStorage.getItem("employees"));
  return (
    <div className="table">
      <MyTable datas={employees} />
    </div>
  );
}
