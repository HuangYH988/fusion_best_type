import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TYPES = [
  "normal",
  "fighting",
  "psychic",
  "dark",
  "ghost",
  "bug",
  "dragon",
  "flying",
  "fairy",
  "rock",
  "ground",
  "steel",
  "poison",
  "grass",
  "water",
  "ice",
  "electric",
  "fire",
];

export default function Search() {
  const [type, setType] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const navigate = useNavigate();

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCombo1Change = (event) => {
    setType1(event.target.value);
  };

  const handleCombo2Change = (event) => {
    const newType2 = event.target.value;

    setType2(newType2);

    if (type1 !== "" && type1 === newType2) {
      alert(
        "Secondary typing cannot be identical to primary typing. Please select 'No secondary type' for single type Pokemon"
      );
    }
  };

  const handleSearchSubmit = () => {
    if (type === "") {
      alert("Please select a primary type.");
      return;
    }

    navigate(`/display?type=${type}`);
  };

  const handleTypeRankSubmit = () => {
    if (type1 === "" || type2 === "") {
      alert("Please select both primary and secondary types.");
      return;
    }

    navigate(`/typerank?type1=${type1}&type2=${type2}`);
  };

  return (
    <div>
      <form>
        <select onChange={handleTypeChange} value={type}>
          <option value="">Select your primary type</option>
          {TYPES.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <br />
        <button type="button" onClick={handleSearchSubmit}>
          Search for best type combinations
        </button>
        <br />
      </form>
      <br />
      <Link to={`/ranking`}>View rankings</Link>
      <h4>Or search for ranking of your chosen type combination</h4>
      <form>
        <select onChange={handleCombo1Change} value={type1}>
          <option value="">Select your first type</option>
          {TYPES.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select onChange={handleCombo2Change} value={type2}>
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
        <button type="button" onClick={handleTypeRankSubmit}>
          Type combination ranking
        </button>
      </form>
    </div>
  );
}
