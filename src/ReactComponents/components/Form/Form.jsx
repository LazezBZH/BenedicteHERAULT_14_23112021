import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Redux/Slice/employeeSlice";
//import MyDatepicker from "../Datepicker/Datepicker";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

const AddEmployeeForm = () => {
  const [
    firstNameToAdd,
    lastNameToAdd,
    birthDateToAdd,
    startDateToAdd,
    streetToAdd,
    cityToAdd,
    etatToAdd,
    zipCodeToAdd,
    departmentToAdd,
  ] = useSelector((state) => [
    state.firstName,
    state.lastName,
    state.birthDate,
    state.startDate,
    state.street,
    state.city,
    state.etat,
    state.zipCode,
    state.department,
  ]);

  const [firstName, setFirstName] = useState(firstNameToAdd);
  const [lastName, setLastName] = useState(lastNameToAdd);
  const [birthDate, setBirthDate] = useState(birthDateToAdd);
  const [startDate, setStartDate] = useState(startDateToAdd);
  const [street, setStreet] = useState(streetToAdd);
  const [city, setCity] = useState(cityToAdd);
  const [etat, setEtat] = useState(etatToAdd);
  const [zipCode, setZipCode] = useState(zipCodeToAdd);
  const [department, setDepartement] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  //const birthDate = JSON.stringify(birthDateObj);
  //const startDate = JSON.stringify(startDateObj);

  const employee = {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    etat,
    zipCode,
    department,
  };

  const handleSubmit = () => {
    dispatch(add(employee));
  };

  console.log(employee);
  console.log("BIRTH", birthDate);
  console.log("START", startDate);
  //console.log("brithobj", birthDateObj);
  //console.log("startobj", valueStartDate);

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="firstname">
        <p>First Name:</p>
        <input
          type="text"
          name="firstname"
          value={firstNameToAdd}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <label className="label" htmlFor="lastname">
        <p>Last Name:</p>
        <input
          type="text"
          name="lastname"
          value={lastNameToAdd}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="birthdate" className={["label", "label-birth"].join(" ")}>
        Date of Birth:
        <DatePicker
          selected={valueBirthDate}
          onChange={(date) => {
            setValueBirthDate(date);
            setBirthDate(date);
          }}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Select a date of birth"
          fixedHeight
          peekNextMonth
          showMonthDropdown
          useShortMonthInDropdown
          showYearDropdown
          dropdownMode="select"
          todayButton="Today"
        />
      </label>
      <label htmlFor="startdate" className={["label", "label-start"].join(" ")}>
        Start Date:
        <DatePicker
          selected={valueStartDate}
          onChange={(date) => {
            setValueStartDate(date);
            setStartDate(date);
          }}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Select a start date"
          fixedHeight
          openToDate={new Date("1993/09/28")}
          peekNextMonth
          showMonthDropdown
          useShortMonthInDropdown
          showYearDropdown
          dropdownMode="select"
          todayButton="Today"
        />
      </label>

      <div className="adress">
        <label className="label" htmlFor="street">
          Street:
          <input
            type="text"
            name="street"
            value={streetToAdd}
            onChange={(e) => {
              setStreet(e.target.value);
            }}
          />
        </label>
        <label className="label" htmlFor="city">
          City:
          <input
            type="text"
            name="city"
            value={cityToAdd}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
        <label className="label" htmlFor="state">
          State:
          <input
            type="text"
            name="state"
            value={etatToAdd}
            onChange={(e) => {
              setEtat(e.target.value);
            }}
          />
        </label>
        <label className="label" htmlFor="zipcode">
          Zip Code:
          <input
            type="text"
            name="zipcode"
            value={zipCodeToAdd}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
        </label>
      </div>
      <label className="label" htmlFor="department">
        Department:
        <input
          type="text"
          name="department"
          value={departmentToAdd}
          onChange={(e) => {
            setDepartement(e.target.value);
          }}
        />
      </label>
      <button className="btn">Save</button>
    </form>
  );
};

export default AddEmployeeForm;
