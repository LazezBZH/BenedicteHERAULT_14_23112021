import React, { useState } from "react";
import Input from "../Form/Input/Input";
import Table from "./Table";
import useSortableData from "./TableSort";
import search from "./TableSearch";
import Pages from "./TablePages";

import "./Table.css";

const MyTable = (props) => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  //search
  const [toSearch, setToSearch] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);

  const postPerPage = 5;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = employees.slice(indexOfFirstPost, indexOfLastPost);
  const page = (pageNumber) => setCurrentPage(pageNumber);
  //sort
  const { items, requestSort, sortConfig } = useSortableData(currentPost);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="myTable">
      <Input
        type="search"
        name="research"
        labelTitle="Search:"
        value={toSearch}
        setInput={setToSearch}
      />
      <table>
        <caption className="table-title">Current Employees</caption>

        <colgroup>
          <col className="table-col1" span="2"></col>
          <col className="table-col2" span="2"></col>
        </colgroup>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("firstName")}
                className={getClassNamesFor("firstName")}
              >
                First Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("lastName")}
                className={getClassNamesFor("lastName")}
              >
                Last Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("startDate")}
                className={getClassNamesFor("startDate")}
              >
                Start Date
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("department")}
                className={getClassNamesFor("department")}
              >
                Department
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("birthDate")}
                className={getClassNamesFor("birthDate")}
              >
                Date of Birth
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("street")}
                className={getClassNamesFor("street")}
              >
                Street
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("city")}
                className={getClassNamesFor("city")}
              >
                City
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("State")}
                className={getClassNamesFor("State")}
              >
                State
              </button>
            </th>
            <th>
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

        <Table items={search(items, toSearch)} />
      </table>

      <Pages
        postPerPage={postPerPage}
        totalOfPosts={employees.length}
        page={page}
      />
    </div>
  );
};

export default MyTable;
