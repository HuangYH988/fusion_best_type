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

    let myImage = null;

    try {
      const Type = this.capitalizeFirstLetter(type.toString());
      myImage = require(`./${Type}.png`);
    } catch (error) {
      // Handle the error here, you can log it if needed
      console.error(`Error loading image for type: ${type}`);
    }

    if (!myImage) {
      return null; // Return null if myImage is not a valid image target
    }

    return (
      <div className="inline-container">
        <img src={myImage} width="75" alt={type} key={type} />
      </div>
    );
  }
}

export default ImageDisplay;
