import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Redux/Slice/employeeSlice";
import DatePicker from "./DatePicker/MyDatePicker";

import dataStates from "./Dropdown/DropdownsData/dataStates";
import dataDepartments from "./Dropdown/DropdownsData/dataDepartments";

import "./Form.css";
import Dropdown from "./Dropdown/Dropdowns";
import Input from "./Input/Input";

const Form = () => {
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
  const [department, setDepartment] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  const [successMessageIsOpen, setSuccessMessageIsOpen] = useState(false);
  const closeSuccessMessage = () => {
    setSuccessMessageIsOpen(false);
  };

  /*const dateForTable = (date) => {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`;
  };*/

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(employee));
    setSuccessMessageIsOpen(true);
    e.target.reset();
    setValueBirthDate(null);
    setValueStartDate(null);
  };

  console.log(employee);
  console.log("BIRTH", birthDate);
  console.log("START", startDate);
  console.log("ETAT", etat);

  const birthDateForTable = JSON.stringify(birthDate);
  console.log(birthDateForTable);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-description">Create Employee</div>
        <Input
          name="firstname"
          labelTitle="First Name:"
          value={firstNameToAdd}
          setInput={setFirstName}
        />
        <Input
          name="lastname"
          labelTitle="Last Name:"
          value={lastNameToAdd}
          setInput={setLastName}
        />
        <DatePicker
          labelTitle="Birth Date:"
          selected={valueBirthDate}
          setValueDate={setValueBirthDate}
          setDate={setBirthDate}
          placeholder="Select a birth date"
        />
        <DatePicker
          labelTitle="Start Date:"
          selected={valueStartDate}
          setValueDate={setValueStartDate}
          setDate={setStartDate}
          placeholder="Select a start date"
        />

        <div className="adress">
          <Input
            name="street"
            labelTitle="Street:"
            value={streetToAdd}
            setInput={setStreet}
          />
          <Input
            name="city"
            labelTitle="City:"
            value={cityToAdd}
            setInput={setCity}
          />
          <Dropdown
            name="etat"
            id="label-etat"
            labelTitle="State:"
            value={etatToAdd}
            setDrop={setEtat}
            datas={dataStates}
          />

          <Input
            name="zipcode"
            labelTitle="Zipcode:"
            value={zipCodeToAdd}
            setInput={setZipCode}
          />
        </div>
        <Dropdown
          name="department"
          labelTitle="Department"
          id="label-department"
          value={departmentToAdd}
          setDrop={setDepartment}
          datas={dataDepartments}
        />
        <input className="submit" type="submit" value="Save  &#x00AE;" />
      </form>
      {successMessageIsOpen && (
        <div className="success">
          <div className="success-message">
            <p>Employee Created!</p>
            <button onClick={closeSuccessMessage}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
