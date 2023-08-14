import React from "react";
import "./App.css";
//import { type_matchup_base2 } from "./db/data_base2";
import { type_matchup_base0 } from "./db/data_base0";
import ImageDisplay from "./images/ImageDisplay";
import { Link, useLocation } from "react-router-dom";

const multiplyObjects = (obj1, obj2) => {
  const multipliedObj = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      multipliedObj[key] = obj1[key] * obj2[key];
    }
  }

  return multipliedObj;
};

const noOfResist = (json) => {
  const result = {};
  for (const key in json) {
    let value = 0;
    for (const key2 in json[key]) {
      if (json[key][key2] < 0) {
        // 4 for base2, 0 for base0
        value += 1;
      }
    }
    result[key] = value;
  }
  return result;
};

const noOfWeak = (json) => {
  const result = {};
  for (const key in json) {
    let value = 0;
    for (const key2 in json[key]) {
      if (json[key][key2] > 0) {
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

  const object1 = type_matchup_base0[type1];
  const sample_json = {};
  for (const key in type_matchup_base0) {
    let object2 = type_matchup_base0[key];

    let sample = multiplyObjects(object1, object2);
    if (key !== type1) {
      sample_json[key] = sample;
    }
  }

  const resist_list = noOfResist(sample_json);
  const resist = getKeysWith3HighestValues(resist_list);
  const weak_list = noOfWeak(sample_json);
  const weak = getKeysWith3LowestValues(weak_list);
  const average_list = averagePoint(sample_json);
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
      <Link to="/">Back</Link>
    </div>
  );
}
