import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    State: "",
    zipCode: "",
    department: "",
  },
};
let employees = JSON.parse(localStorage.getItem("employees")) || [];
localStorage.setItem("employees", JSON.stringify(employees));
employees = JSON.parse(localStorage.getItem("employees"));

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    add: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthDate = action.payload.birthDate;
      state.startDate = action.payload.startDate;
      state.street = action.payload.street;
      state.city = action.payload.city;
      state.State = action.payload.State;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;

      const {
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        State,
        zipCode,
        department,
      } = state;

      employees.push({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        State,
        zipCode,
        department,
      });

      localStorage.setItem("employees", JSON.stringify(employees));
      console.log("employés local", employees);
    },
  },
});

export const { add } = employeeSlice.actions;
export default employeeSlice.reducer;
