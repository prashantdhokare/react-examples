import React from "react";
import { NavigateTo } from "./NavigateTo";

export default function NoRoute() {
  return (
    <div>
      <h1>You are landed on No Mens Land.. go back</h1>
      <NavigateTo redirectName="back" redirect="/" />
    </div>
  );
}
