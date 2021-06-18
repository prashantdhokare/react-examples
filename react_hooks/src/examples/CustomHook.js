import React from "react";
import { NavigateTo } from "./NavigateTo";
import { useInput } from "./useInput";

export default function CustomHook() {
  const [titleProps, resetTitleProps] = useInput("");
  const [colorProps, resetColorProps] = useInput("#000000");

  function submitForm(e) {
    e.preventDefault();
    const soundVal = titleProps.value;
    const colorVal = colorProps.value;
    alert(`Added ${colorVal} color for ${soundVal}`);
    resetTitleProps();
    resetColorProps();
  }
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
        <h1>Custom Hook</h1>
        <form onSubmit={submitForm}>
          <input {...titleProps} type="text" placeholder="Type something.." />
          <input {...colorProps} type="color" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
