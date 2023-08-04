import React from "react";
import { Link } from "react-router-dom";
const TYPES = [
  "Normal",
  "Fighting",
  "Psychic",
  "Dark",
  "Ghost",
  "Bug",
  "Dragon",
  "Flying",
  "Fairy",
  "Rock",
  "Ground",
  "Steel",
  "Poison",
  "Grass",
  "Water",
  "Ice",
  "Electric",
  "Fire",
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
          <Link to={`/display`}>Go</Link>
        </form>
      );
    }
  }
  
  