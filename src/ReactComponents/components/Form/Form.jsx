import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Redux/Slice/employeeSlice";
import DatePicker from "./DatePicker/MyDatePicker";

import dataStates from "./Dropdown/DropdownsData/dataStates";
import dataDepartments from "./Dropdown/DropdownsData/dataDepartments";

import "./Form.css";
import Dropdown from "./Dropdown/Dropdowns";
import Input from "./Input/Input";
import MyModal from "modal-by-lazez";
import { defaultTheme } from "./Modal/styled/modal";

const Form = () => {
  /*const myTheme = {
    containerBg: "red",
    messageBg: "blue ",
    messageHoverBg: "white ",
    messageHoverTxt: "black ",
    borderColor: " yellow",
    buttonBg: "red ",
    buttonHoverBg: "black ",
    buttonHoverTxt: "white ",
  };*/

  const [
    firstNameToAdd,
    lastNameToAdd,
    birthDateToAdd,
    startDateToAdd,
    streetToAdd,
    cityToAdd,
    stateToAdd,
    zipCodeToAdd,
    departmentToAdd,
  ] = useSelector((state) => [
    state.firstName,
    state.lastName,
    state.birthDate,
    state.startDate,
    state.street,
    state.city,
    state.state,
    state.zipCode,
    state.department,
  ]);

  const [firstName, setFirstName] = useState(firstNameToAdd);
  const [lastName, setLastName] = useState(lastNameToAdd);
  const [birthDate, setBirthDate] = useState(birthDateToAdd);
  const [startDate, setStartDate] = useState(startDateToAdd);
  const [street, setStreet] = useState(streetToAdd);
  const [city, setCity] = useState(cityToAdd);
  const [State, setState] = useState(stateToAdd);
  const [zipCode, setZipCode] = useState(zipCodeToAdd);
  const [department, setDepartment] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const dateForTable = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getUTCFullYear();
    return `${month}/${day}/${year}`.toString();
  };

  const employee = {
    firstName,
    lastName,
    birthDate: dateForTable(new Date(birthDate)),
    startDate: dateForTable(new Date(startDate)),
    street,
    city,
    State,
    zipCode,
    department,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(employee));
    e.target.reset();
    setValueBirthDate(null);
    setValueStartDate(null);
    onOpenModal();
  };

  console.log(employee);
  console.log("BIRTH", birthDate);
  console.log("START", startDate);
  console.log("STATE", State);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-description">Create Employee</div>
        <Input
          type="text"
          name="firstname"
          labelTitle="First Name:"
          value={firstNameToAdd}
          setInput={setFirstName}
          regex="/\[([a-zA-Z]+)\]\[([a-zA-Z0-9.]+)\]\{(.+)\}/"
        />
        <Input
          type="text"
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
            type="text"
            name="street"
            labelTitle="Street:"
            value={streetToAdd}
            setInput={setStreet}
          />
          <Input
            type="text"
            name="city"
            labelTitle="City:"
            value={cityToAdd}
            setInput={setCity}
          />
          <Dropdown
            name="state"
            labelTitle="State:"
            value={State}
            setDrop={setState}
            datas={dataStates}
          />

          <Input
            type="number"
            name="zipcode"
            labelTitle="Zipcode:"
            value={zipCodeToAdd}
            setInput={setZipCode}
          />
        </div>
        <Dropdown
          name="department"
          labelTitle="Department"
          value={departmentToAdd}
          setDrop={setDepartment}
          datas={dataDepartments}
        />
        <Input
          type="submit"
          name="submit"
          className="submit"
          value="Save  &#x00AE;"
        />
      </form>
      {openModal && (
        <MyModal
          theme={defaultTheme}
          close={onCloseModal}
          text="Employee Created!"
        />
      )}
    </>
  );
};

export default Form;
