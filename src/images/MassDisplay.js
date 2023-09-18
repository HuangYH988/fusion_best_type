import ImageDisplay from "./ImageDisplay";

export default function MassDisplay(prop){
    const {trueArray}=prop;

    return (
    <div className="typesbox-container">
      {trueArray.map((boolean, index)=>(<div className="types-box" key={index}>
        {boolean ? (<div><ImageDisplay type="fire" />
      <ImageDisplay type="electric" /></div>) : null}
      
    </div>))}
    </div>

    )
}