import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  attack0,
  attack2,
  defence0,
  defence2,
  orderList,
} from "./RankingSingle";
import ImageDisplay from "../images/ImageDisplay";
import "../App.css";

const offence0 = attack0();
const offence2 = attack2();
const defend0 = defence0();
const defend2 = defence2();
const list_attack_0 = orderList(offence0);
const list_attack_2 = orderList(offence2);
const list_defend_0 = orderList(defend0);
const list_defend_2 = orderList(defend2);

export default function DisplayRanking(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type1 = searchParams.get("type1");
  const type2 = searchParams.get("type2");
  let type2Null = true;
  if (type2 === "none") {
    type2Null = false;
  }
  const rankScoreT1A0 = [];
  const rankScoreT1A2 = [];
  const rankScoreT1D0 = [];
  const rankScoreT1D2 = [];
  const rankScoreT2A0 = [];
  const rankScoreT2A2 = [];
  const rankScoreT2D0 = [];
  const rankScoreT2D2 = [];
  for (const type of list_attack_0) {
    if (type[0] === type1) {
      rankScoreT1A0.push(type[2]);
      rankScoreT1A0.push(type[1]);
    } else if (type2Null && type[0] === type2) {
      rankScoreT2A0.push(type[2]);
      rankScoreT2A0.push(type[1]);
    }
  }
  for (const type of list_attack_2) {
    if (type[0] === type1) {
      rankScoreT1A2.push(type[2]);
      rankScoreT1A2.push(type[1]);
    } else if (type2Null && type[0] === type2) {
      rankScoreT2A2.push(type[2]);
      rankScoreT2A2.push(type[1]);
    }
  }
  for (const type of list_defend_0) {
    if (type[0] === type1) {
      rankScoreT1D0.push(type[2]);
      rankScoreT1D0.push(type[1]);
    } else if (type2Null && type[0] === type2) {
      rankScoreT2D0.push(type[2]);
      rankScoreT2D0.push(type[1]);
    }
  }
  for (const type of list_defend_2) {
    if (type[0] === type1) {
      rankScoreT1D2.push(type[2]);
      rankScoreT1D2.push(type[1]);
    } else if (type2Null && type[0] === type2) {
      rankScoreT2D2.push(type[2]);
      rankScoreT2D2.push(type[1]);
    }
  }
  const history = useNavigate();

  const handleDualLinkClick = (event) => {
    event.preventDefault(); //Prevents default action of refreshing the page and losing types passed
    if (!type2Null) {
      // Show alert if type2Null is false
      alert(
        "You cannot navigate to Dual Typing page when there is no secondary type"
      );
    } else {
      // Navigate to "/dual" if type2Null is true
      history(`/dual?type1=${type1}&type2=${type2}`);
    }
  };

  return (
    <div>
      <div className="flex-container">
        <div className="type1-wrapper">
          <ImageDisplay type={type1} />: <br />
          Attacking base 0: ranking: {rankScoreT1A0[0]}, score:{" "}
          {rankScoreT1A0[1]}
          <br />
          Attacking base 2: ranking: {rankScoreT1A2[0]}, score:{" "}
          {rankScoreT1A2[1]}
          <br />
          Defending base 0: ranking: {rankScoreT1D0[0]}, score:{" "}
          {rankScoreT1D0[1]}
          <br />
          Defending base 2: ranking: {rankScoreT1D2[0]}, score:{" "}
          {rankScoreT1D2[1]}
        </div>
        {type2Null && (
          <div className="type2-wrapper">
            <ImageDisplay type={type2} />:<br />
            Attacking base 0: ranking: {rankScoreT2A0[0]}, score:{" "}
            {rankScoreT2A0[1]}
            <br />
            Attacking base 2: ranking: {rankScoreT2A2[0]}, score:{" "}
            {rankScoreT2A2[1]}
            <br />
            Defending base 0: ranking: {rankScoreT2D0[0]}, score:{" "}
            {rankScoreT2D0[1]}
            <br />
            Defending base 2: ranking: {rankScoreT2D2[0]}, score:{" "}
            {rankScoreT2D2[1]}
          </div>
        )}
      </div>
      <br />
      <Link onClick={handleDualLinkClick}>Dual typing</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
