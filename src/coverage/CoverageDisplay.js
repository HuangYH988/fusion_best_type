import ImageDisplay from "../images/ImageDisplay";

export default function CoverageDisplay(props){
    const {type1, type2, type3, type4}=props;
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
            This part will display all the type combinations not covered by the above combination of attack typings.</div>
    )
}