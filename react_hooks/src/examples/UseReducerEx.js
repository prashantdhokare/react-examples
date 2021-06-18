import React, { useReducer } from "react";
import { NavigateTo } from "./NavigateTo";

const initialState = {
  message: "Hello",
};

const reducer = (state, action) => {
  console.log("Reducer..");
  switch (action.type) {
    case "Hi":
      return {
        message: "Hi",
      };

    case "By":
      return {
        message: "By",
      };

    default:
      alert(`No action of type ${action.type}`);
      return state;
  }
};

function UseReducerEx() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <h1>useReducer Hook</h1>
        <p>{state.message}</p>
        <button onClick={() => dispatch({ type: "Hi" })}>Say Hi</button>
        <button onClick={() => dispatch({ type: "By" })}>Say By</button>
        <button onClick={() => dispatch({ type: "ThankYou" })}>
          Say Thank you
        </button>
      </div>
    </div>
  );
}

export default UseReducerEx;
