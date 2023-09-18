import ImageDisplay from "./ImageDisplay";
import dualtypeList from "../db/dualtypeNumbered";

export default function MassDisplay(prop) {
  const { trueArray } = prop;
  function returnType1(Index) {
    for (const combo of dualtypeList) {
      if (combo.index === Index) {
        const type = combo.type1;

        return type;
      }
    }
    return null;
  }
  function returnType2(Index) {
    for (const combo of dualtypeList) {
      if (combo.index === Index) {
        const type = combo.type2;

        return type;
      }
    }
    return null;
  }

  return (
    <div className="typesbox-container">
      {trueArray.map((boolean, index) => (
        <div className="types-box" key={index}>
          {boolean ? (
            <div>
              <ImageDisplay type={returnType1(index)} />
              {returnType2(index) ? (
                <ImageDisplay type={returnType2(index)} />
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
