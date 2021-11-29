import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
    birthDate: null,
    startDate: null,
    street: "",
    city: "",
    etat: "",
    zipCode: "",
    department: "",
  },
};
let employees = [];

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
      state.etat = action.payload.etat;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;

      const {
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        etat,
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
        etat,
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
