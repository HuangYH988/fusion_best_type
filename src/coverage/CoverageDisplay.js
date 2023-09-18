import ImageDisplay from "../images/ImageDisplay";
import MassDisplay from "../images/MassDisplay";

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

export default function CoverageDisplay(props){
    const {type1, type2, type3, type4}=props;
    const indicesToReplace = [0, 5, 10];
    const arrayWithTrueValues2 = replaceElementsWithFalse(arrayWithTrueValues, indicesToReplace);
    return(
        <div><div>
        Pokemon type is <ImageDisplay type={type1} /> {" "}
        {type2.value ? (
          type2.isSTAB ? (
            <ImageDisplay type={type2.value} />
          ) : null
        ) : null}
        <br />
        Coverage moves are{" "}
        {type2.value ? (
          type2.isSTAB ? null : (
            <ImageDisplay type={type2.value} />
          )
        ) : null}{" "}
        {type3 ? <ImageDisplay type={type3} /> : null} {" "}
        {type4 ? <ImageDisplay type={type4} /> : null}
      </div><br />
            <MassDisplay trueArray={arrayWithTrueValues2} />
            </div>
    )
}