import React, { useRef } from "react";
import { NavigateTo } from "./NavigateTo";

function UseRefEx() {
  const sound = useRef();
  const color = useRef();

  function submitForm(e) {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`Added ${colorVal} color for ${soundVal}`);
    sound.current.value = "";
    color.current.value = "";
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
        <h1>useRef Hook</h1>
        <form onSubmit={submitForm}>
          <input ref={sound} type="text" placeholder="Type something.." />
          <input ref={color} type="color" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default UseRefEx;
