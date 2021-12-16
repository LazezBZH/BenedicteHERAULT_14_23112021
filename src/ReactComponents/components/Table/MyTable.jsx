import React, { useState } from "react";
import Input from "../Form/Input/Input";
import Table from "./Table";
import useSortableData from "./TableSort";
import search from "./TableSearch";
import Pages from "./TablePages";
import Dropdown from "../Form/Dropdown/Dropdowns";
import rowsPerPage from "../Form/Dropdown/DropdownsData/dataPages";

import "./Table.css";

const MyTable = (props) => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  //search
  const [toSearch, setToSearch] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(10);

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
      <div className="table-utils-1">
        <Dropdown
          name="rowPerPage"
          labelTitle="Show:"
          labelTitle2="entries:"
          value={postPerPage}
          setDrop={setPostPerPage}
          datas={rowsPerPage}
        />
      </div>
      <div className="table-utils-2">
        <Input
          type="search"
          name="research"
          labelTitle="Search:"
          value={toSearch}
          setInput={setToSearch}
        />
      </div>
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

      <div className="table-footer">
        <div>
          {employees.length === 0 ? (
            <p className="table-footer-p">No employee created yet!</p>
          ) : (
            [
              currentPage === Math.ceil(employees.length / postPerPage) ? (
                <p className="table-footer-p">
                  Showing {indexOfFirstPost + 1} to {employees.length} of &nbsp;
                  {employees.length} entries
                </p>
              ) : (
                <p className="table-footer-p">
                  Showing {indexOfFirstPost + 1} to {indexOfLastPost} of &nbsp;
                  {employees.length} entries
                </p>
              ),
            ]
          )}
        </div>
        <div className="pagination">
          {currentPage === 1 ? (
            <div></div>
          ) : (
            <p
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              Previous
            </p>
          )}
          <Pages
            postPerPage={postPerPage}
            totalOfPosts={employees.length}
            page={page}
          />
          {currentPage === Math.ceil(employees.length / postPerPage) ||
          employees.length === 0 ? (
            <div></div>
          ) : (
            <p
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTable;
