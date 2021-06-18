import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div style={{ margin: "25px" }}>
      <Link style={{ margin: "10px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "10px" }} to="/hooks">
        Hooks
      </Link>
    </div>
  );
};

export default Navigation;
