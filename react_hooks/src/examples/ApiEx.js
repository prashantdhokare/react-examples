import React, { useState, useEffect } from "react";
import UseQuery from "./UseQuery";
import { NavigateTo } from "./NavigateTo";

function ApiEx() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users${perPage}`)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.log(error));
  }, []);
  let query = UseQuery();
  let perPage =
    query && query.get("per_page")
      ? `?per_page=${query.get("per_page")}`
      : "?per_page=10";
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
        <h1>
          useEffect Hook with API call
          <br />
          custom useQuery hook for reading query parameters
        </h1>
        {Array.isArray(data) && data.length > 0 && (
          <>
            <h3>User Names</h3>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
              }}
            >
              {data.map((user) => (
                <li key={user.id}>{user.login}</li>
              ))}
            </ul>
          </>
        )}
        {!Array.isArray(data) || (data.length === 0 && <div>No User Data</div>)}
        <button onClick={() => setData([])}>Reset user data</button>
      </div>
    </div>
  );
}

export default ApiEx;
