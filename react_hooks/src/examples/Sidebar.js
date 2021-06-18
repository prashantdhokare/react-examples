import React from "react";
import { Link } from "react-router-dom";
import { hookSidebarLinks } from "../constants/routes";

const Sidebar = ({ url = "", setNestedParam }) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "25px",
      }}
    >
      <h2>Nested Routes Example</h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          textAlign: "left",
          width: "max-content",
        }}
      >
        {hookSidebarLinks.map((link, index) => (
          <li style={link.style} key={index}>
            <Link
              to={`${url}${link.to}`}
              onClick={() =>
                setNestedParam(`${link.param ? ":" + link.param : ""}`)
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
