import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import { TYPES } from "../Search";
import "../App.css";
import CoverageDisplay from "./CoverageDisplay";

export function CoverageTemp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Type1 = searchParams.get("type");

  return (
    <div>
      <h1>This is a temperoray page</h1>
      <h3>
        The page for <ImageDisplay type={Type1} /> is under construction!
      </h3>

      <Link to="/">Home</Link>
    </div>
  );
}

export function CoverageHome() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Type1 = searchParams.get("type");

  const [type2, setType2] = useState({ value: "", isSTAB: true });
  const [type3, setType3] = useState("");
  const [type4, setType4] = useState("");

  const handleCombo2Change = (event) => {
    const newType2 = event.target.value;

    // Make sure there are no repeats amongst the types
    if (
      newType2 !== "" &&
      (Type1 === newType2 || newType2 === type3 || newType2 === type4)
    ) {
      alert(
        "No typing should be identical. Please choose 'No secondary type' if you wish for a monotype Pokemon"
      );
    } else {
      setType2((prevType2) => ({
        ...prevType2,
        value: newType2,
      }));
    }
  };
  const handleCheckboxToggle = (event) => {
    const isChecked = event.target.checked;

    setType2((prevType2) => ({
      ...prevType2,
      isSTAB: isChecked,
    }));
  };
  const handleCombo3Change = (event) => {
    const newType3 = event.target.value;

    // Make sure there are no repeats amongst the types
    if (
      newType3 !== "" &&
      (Type1 === newType3 || newType3 === type2.value || newType3 === type4)
    ) {
      alert(
        "No typing should be identical. Please choose 'No third type' if you do not wish for a coverage move"
      );
    } else {
      setType3(newType3);
    }
  };
  const handleCombo4Change = (event) => {
    const newType4 = event.target.value;

    // Make sure there are no repeats amongst the types
    if (
      newType4 !== "" &&
      (Type1 === newType4 || newType4 === type2.value || newType4 === type3)
    ) {
      alert(
        "No typing should be identical. Please choose 'No forth type' if you do not wish for a coverage move"
      );
    } else {
      setType4(newType4);
    }
  };
  return (
    <div>
      <h2>STAB types:</h2>
      <form>
        <div className="types-container">
          <div className="type-container">
            <h4>Primary type:</h4>
            <ImageDisplay type={Type1} />
          </div>
          <div className="type-container">
            <h4>Secondary type/ Coverage move 1:</h4>
            <select onChange={handleCombo2Change} value={type2.value}>
              <option value="">Select your second type</option>
              <option key="0" value="none">
                No secondary type
              </option>
              {TYPES.map((type, index) => (
                <option key={index + 1} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <br />
            <input
              type="checkbox"
              checked={type2.isSTAB}
              onChange={handleCheckboxToggle}
            />
            <label className="label-tag">STAB</label>
          </div>
        </div>
        <br />
      </form>
      <h2>Coverage move types:</h2>
      <form>
        <select onChange={handleCombo3Change} value={type3}>
          <option value="">Select your third type</option>
          <option key="0" value="none">
            No third type
          </option>
          {TYPES.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select onChange={handleCombo4Change} value={type4}>
          <option value="">Select your forth type</option>
          <option key="0" value="none">
            No forth type
          </option>
          {TYPES.map((type, index) => (
            <option key={index + 1} value={type}>
              {type}
            </option>
          ))}
        </select>
        <br />
      </form>
      
      <br />
      <CoverageDisplay type1={Type1} type2={type2} type3={type3} type4={type4}/>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
