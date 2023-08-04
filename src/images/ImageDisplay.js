import React from "react";

class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  capitalizeFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty string case

    // Convert the first character to uppercase and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const { type } = this.props;
    // const types = [
    //   "Normal",
    //   "Fighting",
    //   "Psychic",
    //   "Dark",
    //   "Ghost",
    //   "Bug",
    //   "Dragon",
    //   "Flying",
    //   "Fairy",
    //   "Rock",
    //   "Ground",
    //   "Steel",
    //   "Poison",
    //   "Grass",
    //   "Water",
    //   "Ice",
    //   "Electric",
    //   "Fire",
    // ];

    let myImage;
    const Type = this.capitalizeFirstLetter(type.toString());
    myImage = require(`./${Type}.png`);

    return (
      <div className="inline-container">
        <img src={myImage} width="70" alt={type} key={type} />
      </div>
    );
  }
}

export default ImageDisplay;
