import React, { useState, useEffect, useMemo } from "react";
import ImageDisplay from "../images/ImageDisplay";
import MassDisplay from "../images/MassDisplay";
import dualtypeList from "../db/dualtypeNumbered";
import { type_matchup_base2 } from "../db/data_base2";

const arrayWithTrueValues = new Array(171).fill(true);

function replaceElementsWithFalse(array, indicesToReplace) {
  const newArray = [...array]; // Create a copy of the original array
  indicesToReplace.forEach((index) => {
    if (index >= 0 && index < newArray.length) {
      newArray[index] = false; // Replace the element at the specified index with false
    }
  });
  return newArray;
}

function checkCoverageSTAB(type) {
  let boolArray = [];
  let defence1 = null;
  let defence2 = null;
  let result = 0;
  for (const item of dualtypeList) {
    defence1 = item.type1;
    result = type_matchup_base2[defence1][type];
    if (item.type2) {
      defence2 = item.type2;
      result = result * type_matchup_base2[defence2][type];
    } else {
      result = result * 2;
    }
    if (result >= 4) {
      boolArray.push(item.index);
    }
  }
  return boolArray;
}

function checkCoverageNonSTAB(type) {
  let boolArray = [];
  let defence1 = null;
  let defence2 = null;
  let result = 0;
  for (const item of dualtypeList) {
    defence1 = item.type1;
    result = type_matchup_base2[defence1][type];
    if (item.type2) {
      defence2 = item.type2;
      result = result * type_matchup_base2[defence2][type];
    } else {
      result = result * 2;
    }
    if (result > 4) {
      boolArray.push(item.index);
    }
  }
  return boolArray;
}

export default function CoverageDisplay(props) {
  const { type1, type2, t2STAB, type3, type4 } = props;

  // State to track the STAB checkbox value
 
  const [displayBool, setDisplayBool] = useState(arrayWithTrueValues);

  const combinedArray = useMemo(() => {
  const array1 = checkCoverageSTAB(type1);
  let array2 = [];
  let array3 = [];
  let array4 = [];

  // Use the isSTAB prop to determine which function to use
  if (t2STAB) {
    array2 = checkCoverageSTAB(type2.value);
  } else {
    array2 = checkCoverageNonSTAB(type2.value);
  }

  if (type3 !== "" && type3 !== "none") {
    array3 = checkCoverageNonSTAB(type3);
  }
  if (type4 !== "" && type4 !== "none") {
    array4 = checkCoverageNonSTAB(type4);
  }

  // Combine arrays and remove duplicates by converting to a Set
  const combinedSet = new Set([...array1, ...array2, ...array3, ...array4]);

  // Convert the Set back to an ordered array
  return Array.from(combinedSet);
}, [type1, type2.value, type3, type4, t2STAB]);
  // Toggle the STAB checkbox value
  

  

  useEffect(() => {
    const arrayWithTrueValues2 = replaceElementsWithFalse(
      arrayWithTrueValues,
      combinedArray
    );
    setDisplayBool(arrayWithTrueValues2);
  }, [combinedArray]);

  return (
    <div>
      <div>
        Pokemon type is <ImageDisplay type={type1} />{" "}
        {type2.value ? (
          t2STAB ? (
            <ImageDisplay type={type2.value} />
          ) : null
        ) : null}
        <br />
        Coverage moves are{" "}
        {type2.value ? (
          t2STAB ? null : (
            <ImageDisplay type={type2.value} />
          )
        ) : null}{" "}
        {type3 ? <ImageDisplay type={type3} /> : null}{" "}
        {type4 ? <ImageDisplay type={type4} /> : null}
      </div>
      <br />
      
      <MassDisplay trueArray={displayBool} />
    </div>
  );
}
