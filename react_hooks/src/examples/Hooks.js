import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Hook from "./Hook";
import Sidebar from "./Sidebar";

export default function Hooks() {
  let [nestedParam, setNestedParam] = useState("");
  let { path, url } = useRouteMatch();
  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "coral",
        margin: "25px",
      }}
    >
      <h1>React Hooks Examples</h1>
      <h3>
        React Hook: useState
        <br /> React Router Hook: useRouteMatch
      </h3>
      <div style={{ display: "flex", margin: "25px" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            background: "#f0f0f0",
            margin: "25px",
            borderStyle: "solid",
            borderColor: "#4dba3a",
          }}
        >
          <Sidebar url={url} setNestedParam={setNestedParam} />
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            background: "#f0f0f0",
            margin: "25px",
            borderStyle: "solid",
            borderColor: "#4dba3a",
          }}
        >
          <Switch>
            <Route exact path={path}>
              <h3>Please select a Hook example.</h3>
            </Route>
            <Route path={`${path}/:hookId/${nestedParam}`}>
              <Hook rootPath={path} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
