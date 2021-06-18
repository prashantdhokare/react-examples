import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { NavigateTo } from "./NavigateTo";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
}

function UseStateEx({ rootPath, hookId }) {
  const [selectedStar, setSelectedStar] = useState(0);
  let { pathname } = useLocation();
  let { totalStars } = useParams();
  if (!totalStars) {
    totalStars = pathname.replace(`${rootPath}/${hookId}/`, "");
  }
  useEffect(() => {
    setSelectedStar(0);
  }, [totalStars]);

  const star = totalStars && Number(totalStars) ? Number(totalStars) : 5;
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
          React Hook: useState, useEffect
          <br /> React Router Hook: useParams, useLocation
        </h1>
        <p>
          You can change the number of star by updating query parameter in url.
          <br />
          Please rate me
        </p>
        {createArray(Number(star)).map((n, i) => (
          <Star
            key={i}
            selected={selectedStar > i}
            onSelect={() => setSelectedStar(i + 1)}
          />
        ))}
        <p>
          {selectedStar} out of {star}
        </p>
      </div>
    </div>
  );
}

export default UseStateEx;
