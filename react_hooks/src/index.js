import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const CarsContext = createContext();
export const useCars = () => useContext(CarsContext);
const cars = [
  { id: 1, company: "BMW" },
  { id: 2, company: "Audi" },
  { id: 3, company: "Kia" },
  { id: 4, company: "Toyota" },
  { id: 5, company: "Hond" },
];
ReactDOM.render(
  <CarsContext.Provider value={{ cars }}>
    <App />
  </CarsContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
