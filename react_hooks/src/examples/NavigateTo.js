import React from "react";
import { useHistory } from "react-router-dom";

export function NavigateTo({ redirectName, redirect }) {
  const history = useHistory();
  function navigateTo() {
    history.push(redirect);
  }
  return (
    <div
      style={{
        margin: "25px",
        padding: "10px",
        borderStyle: "solid",
        borderColor: "#666463",
      }}
    >
      <h1>useHistory Hook</h1>
      <button onClick={navigateTo}>{redirectName}</button>
    </div>
  );
}
