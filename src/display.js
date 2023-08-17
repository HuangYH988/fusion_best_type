import React, { useState } from "react";
import "./App.css";
import { type_matchup_base2 } from "./db/data_base2";
import { type_matchup_base0 } from "./db/data_base0";
import ImageDisplay from "./images/ImageDisplay";
import { Link, useLocation } from "react-router-dom";

export const multiplyObjects = (obj1, obj2) => {
  const multipliedObj = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      multipliedObj[key] = obj1[key] * obj2[key];
    }
  }

  return multipliedObj;
};

export const addingObjects = (obj1, obj2) => {
  const addedObj = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] === -2 || obj2[key] === -2) {
        addedObj[key] = -3;
      } else {
        addedObj[key] = obj1[key] + obj2[key];
      }
    }
  }

  return addedObj;
};

const noOfResist = (json, mode) => {
  const result = {};
  for (const key in json) {
    let value = 0;
    for (const key2 in json[key]) {
      if (
        (mode === "base0" && json[key][key2] < 0) ||
        (mode === "base2" && json[key][key2] < 4)
      ) {
        value += 1;
      }
    }
    result[key] = value;
  }
  return result;
};

const noOfWeak = (json, mode) => {
  const result = {};
  for (const key in json) {
    let value = 0;
    for (const key2 in json[key]) {
      if (
        (mode === "base0" && json[key][key2] > 0) ||
        (mode === "base2" && json[key][key2] > 4)
      ) {
        value += 1;
      }
    }
    result[key] = value;
  }
  return result;
};

const averagePoint = (json) => {
  const result = {};
  for (const key in json) {
    let value = 0;
    for (const key2 in json[key]) {
      value += json[key][key2];
    }
    const ave = Number((value / 18).toFixed(2));
    result[key] = ave;
  }
  return result;
};

const getKeysWith3HighestValues = (obj) => {
  const values = Object.values(obj);

  const sortedValues = values.sort((a, b) => b - a);
  const highestValues = [sortedValues[0]];

  let result = {};
  let secondHighestFound = false;
  let thirdHighestFound = false;

  for (const [key, value] of Object.entries(obj)) {
    if (value === highestValues[0]) {
      result[key] = value;
    } else if (!secondHighestFound && value === sortedValues[1]) {
      result[key] = value;
      secondHighestFound = true;
    } else if (!thirdHighestFound && value === sortedValues[2]) {
      result[key] = value;
      thirdHighestFound = true;
    }
  }

  return result;
};

const getKeysWith3LowestValues = (obj) => {
  const values = Object.values(obj);

  const sortedValues = values.sort((a, b) => a - b);
  const lowestValues = [sortedValues[0]];

  let result = {};
  let secondLowestFound = false;
  let thirdLowestFound = false;

  for (const [key, value] of Object.entries(obj)) {
    if (value === lowestValues[0]) {
      result[key] = value;
    } else if (!secondLowestFound && value === sortedValues[1]) {
      result[key] = value;
      secondLowestFound = true;
    } else if (!thirdLowestFound && value === sortedValues[2]) {
      result[key] = value;
      thirdLowestFound = true;
    }
  }

  return result;
};

export default function Display() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type1 = searchParams.get("type");

  const [mode, setMode] = useState("base0"); // Initialize mode as "base0"

  const toggleMode = () => {
    setMode(mode === "base0" ? "base2" : "base0"); // Toggle between "base0" and "base2"
  };

  const typeMatchupData =
    mode === "base0" ? type_matchup_base0 : type_matchup_base2;

  const object1 =
    typeMatchupData[type1]; // Type1 is obtained from list in previous page
  const result_json = {}; // Resulting json for effective of different type attacks against the resulting type combinations
  if (mode === "base0") {
    for (const key in type_matchup_base0) {
      const object2 = type_matchup_base0[key];

      let result = addingObjects(object1, object2);
      if (key !== type1) {
        result_json[key] = result;
      }
    }
  } else if (mode === "base2") {
    for (const key in type_matchup_base2) {
      const object2 = type_matchup_base2[key];

      let result = multiplyObjects(object1, object2);
      if (key !== type1) {
        result_json[key] = result;
      }
    }
  }

  const resist_list = noOfResist(result_json, mode);
  const resist = getKeysWith3HighestValues(resist_list);
  const weak_list = noOfWeak(result_json, mode);
  const weak = getKeysWith3LowestValues(weak_list);
  const average_list = averagePoint(result_json);
  const average = getKeysWith3LowestValues(average_list);
  return (
    <div>
      <h2>From database:</h2>
      <div>
        {" "}
        Primary Type is: <ImageDisplay type={type1} />
      </div>
      <div>
        Type combination formed with the most resistances:
        {Object.keys(resist).map((key, index) => (
          <ImageDisplay key={index} type={key} />
        ))}
      </div>
      <div>
        Type combination formed with the least weaknesses:
        {Object.keys(weak).map((key, index) => (
          <ImageDisplay key={index} type={key} />
        ))}
      </div>
      <div>
        Type combination formed with the most desirable score:
        {Object.keys(average).map((key, index) => (
          <ImageDisplay key={index} type={key} />
        ))}
      </div>
      <br />
      <button onClick={toggleMode}>Toggle Mode</button>
      Current mode: {mode}
      <br />
      <Link to="/">Back</Link>
    </div>
  );
}
