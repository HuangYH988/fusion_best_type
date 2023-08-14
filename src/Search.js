import React from "react";
import { Link } from "react-router-dom";
export const TYPES = [
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

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    };
  }

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  render() {
    const { type } = this.state;
    return (
      <form>
        <select onChange={this.handleTypeChange} value={type}>
          <option value="">Select your primary type</option>
          {TYPES.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <br />
        <Link to={`/display?type=${type}`}>
          Search for best type combinations
        </Link>
        <br />
        <Link to={`/ranking`}>
          View rankings
        </Link>
      </form>
    );
  }
}
