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

// Function to generate the JSON array

    const dualtypeList = [];
  
    // Create combinations of two distinct types
    for (let i = 0; i < TYPES.length - 1; i++) {
      for (let j = i + 1; j < TYPES.length; j++) {
        dualtypeList.push({
          index: dualtypeList.length,
          type1: TYPES[i],
          type2: TYPES[j],
        });
      }
    }
  
    // Create JSON elements for types with only one type and the second type as null
    for (let i = 0; i < TYPES.length; i++) {
        dualtypeList.push({
        index: dualtypeList.length,
        type1: TYPES[i],
        type2: null,
      });
    }
  
export default  dualtypeList;
  