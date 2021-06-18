import React from "react";
import { useCars } from "../";
import { NavigateTo } from "./NavigateTo";

function UseCustomContextEx() {
  const { cars } = useCars();
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
        <h1>Custom use context hook</h1>
        <p>I like the below car companies</p>
        <ul
          style={{
            listStyleType: "none",
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

export default UseCustomContextEx;
