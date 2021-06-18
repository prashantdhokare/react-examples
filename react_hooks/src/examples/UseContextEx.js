import React, { useContext } from "react";
import { CarsContext } from "../";
import { NavigateTo } from "./NavigateTo";

function UseContextEx() {
  const { cars } = useContext(CarsContext);
  return (
    <div>
      <NavigateTo redirectName="back" redirect="/" />
      <div
        style={{
          margin: "25px",
          padding: "10px",
          borderStyle: "solid",
          borderColor: "#ffd350",
        }}
      >
        <h1>useContext hook</h1>
        <p>I like the below car companies</p>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          {cars.map((car) => (
            <li key={car.id}>{car.company}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseContextEx;
