import React, { useState, useEffect } from "react";
import { NavigateTo } from "./NavigateTo";

function UseEffectEx() {
  const [name, setName] = useState("Jin");
  useEffect(() => {
    console.log(name);
  }, [name]);

  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    console.log(admin);
  }, [admin]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Current counter ${count}`;
    return () => (document.title = "React Router and Hook");
  }, [count]);

  return (
    <section>
      <NavigateTo redirectName="back" redirect="/" />
      <div
        style={{
          margin: "25px",
          padding: "10px",
          borderStyle: "solid",
          borderColor: "#ffd350",
        }}
      >
        <h1>useState and useEffect Hook</h1>
        <p>
          Click Me will also update the page title and once this component will
          be unmounted page title will be restored back.
        </p>
        <diV>
          <p>you clicked counter {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click Me</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </diV>
        <div>
          <p>Current user name is {name}</p>
          <button
            onClick={() => (name === "Jin" ? setName("Jam") : setName("Jin"))}
          >
            Change User
          </button>
          <p>User is {admin ? "admin" : "not a Admin"}</p>
          <button onClick={() => setAdmin(!admin)}>Change Role</button>
        </div>
      </div>
    </section>
  );
}

export default UseEffectEx;
