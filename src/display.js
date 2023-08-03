import React from "react";
import { type_matchup } from "./db/data";

const multiplyObjects = (obj1, obj2) => {
  const multipliedObj = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      multipliedObj[key] = obj1[key] * obj2[key];
    }
  }

  return multipliedObj;
};
const type3 = 'water';
export default function Display(props) {
  const { type1, type2 } = props;
  const object1 = type_matchup[type1];
  const object2 = type_matchup[type2];
  const multipliedObjects = multiplyObjects(object1, object2);
 const sample = multipliedObjects[type3];
  return (
    <div>
      <h2>From database:</h2>
      <p> Type 1 is: {type1}</p>
      <p> Type 2 is: {type2} </p>
      {/* {Object.entries(multipliedObjects).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))} */}
    {sample}
    </div>
  );
}
