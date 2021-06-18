import React from "react";
import { NavigateTo } from "./NavigateTo";
import useFetch from "./useFetch";

const CustomFetchApi = ({ login }) => {
  const [loading, data, error] = useFetch(
    `https://api.github.com/users/${login}`
  );
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
        <h1>Custom hook with API call</h1>
        {loading && <div>Loading...</div>}
        {error && <div>{JSON.stringify(error, null, 2)}</div>}
        {data && (
          <div>
            <p>Profile Photo</p>
            <img src={data.avatar_url} alt="Prashant" />
            <p>Name: {data.name ? data.name : login}</p>
            <p>Github url: {data.html_url}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomFetchApi;
