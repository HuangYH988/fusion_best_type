import React from "react";
import { type_matchup_base0 } from "../db/data_base0";
import { type_matchup_base2 } from "../db/data_base2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import { isDuplicateSample, orderList } from "./RankingDouble";
import { TYPES } from "../Search";
import { multiplyObjects, addingObjects } from "../display";

export default function DisplayDouble() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const type1 = searchParams.get("type1");
  const type2 = searchParams.get("type2");
  const handleTypeRankSubmit = () => {
    navigate(`/typerank?type1=${type1}&type2=${type2}`);
  };
  let combo_list_0 = [];
  let combo_list_2 = [];

  for (const i in TYPES) {
    const Type = TYPES[i];
    const obj1_0 = type_matchup_base0[Type];
    const obj1_2 = type_matchup_base2[Type];

    for (const key in type_matchup_base2) {
      if (key !== Type) {
        if (!isDuplicateSample(combo_list_0, Type, key)) {
          const object2_0 = type_matchup_base0[key];
          const object2_2 = type_matchup_base2[key];
          const result0 = addingObjects(obj1_0, object2_0);
          const result2 = multiplyObjects(obj1_2, object2_2);

          let i_0 = 0;
          let i_2 = 0;
          for (const matchup in result0) {
            i_0 += result0[matchup];
          }
          for (const matchup in result2) {
            i_2 += result2[matchup];
          }
          const score0 = 36 - i_0;
          const score2 = 172 - i_2;
          combo_list_0.push({
            type1: Type,
            type2: key,
            matchup: result0,
            score: score0,
          });
          combo_list_2.push({
            type1: Type,
            type2: key,
            matchup: result2,
            score: score2,
          });
        }
      }
    }
  }
  let combined_list_0 = [...combo_list_0];
  let combined_list_2 = [...combo_list_2];

  // Adding single type scenarios
  for (const type in type_matchup_base2) {
    let i_0 = 0;
    let i_2 = 0;
    const obj = type_matchup_base2[type];
    for (const key in obj) {
      i_2 += obj[key] * 2;

      if (obj[key] === -2) {
        // immunity
        i_0 -= 3;
      } else {
        i_0 += obj[key];
      }
    }
    const score_0 = 36 - i_0;
    const score_2 = 172 - i_2;
    combined_list_0.push({
      type1: type,
      type2: null,
      matchup: obj,
      score: score_0,
    });
    combined_list_2.push({
      type1: type,
      type2: null,
      matchup: obj,
      score: score_2,
    });
  }

  const ranked_combo_list_0 = orderList(combo_list_0);
  const ranked_combo_list_0s = orderList(combined_list_0);
  const ranked_combo_list_2 = orderList(combo_list_2);
  const ranked_combo_list_2s = orderList(combined_list_2);

  const rankScoreS0 = [];
  const rankScoreS2 = [];
  const rankScoreD0 = [];
  const rankScoreD2 = [];

  for (const combo of ranked_combo_list_0) {
    if (
      (combo.type1 === type1 && combo.type2 === type2) ||
      (combo.type1 === type2 && combo.type2 === type1)
    ) {
      rankScoreD0.push(combo.rank);
      rankScoreD0.push(combo.score);
    }
  }
  for (const combo of ranked_combo_list_0s) {
    if (
      (combo.type1 === type1 && combo.type2 === type2) ||
      (combo.type1 === type2 && combo.type2 === type1)
    ) {
      rankScoreS0.push(combo.rank);
      rankScoreS0.push(combo.score);
    }
  }
  for (const combo of ranked_combo_list_2) {
    if (
      (combo.type1 === type1 && combo.type2 === type2) ||
      (combo.type1 === type2 && combo.type2 === type1)
    ) {
      rankScoreD2.push(combo.rank);
      rankScoreD2.push(combo.score);
    }
  }
  for (const combo of ranked_combo_list_2s) {
    if (
      (combo.type1 === type1 && combo.type2 === type2) ||
      (combo.type1 === type2 && combo.type2 === type1)
    ) {
      rankScoreS2.push(combo.rank);
      rankScoreS2.push(combo.score);
    }
  }

  return (
    <div>
      <h3>Rankings for your selected dual typing: </h3>
      <ImageDisplay type={type1} /><ImageDisplay type={type2} />
      <div >
          
          base 0 without single typings: ranking: {rankScoreD0[0]}, score:{" "}
          {rankScoreD0[1]}
          <br />
          base 0 with single typings: ranking: {rankScoreS0[0]}, score:{" "}
          {rankScoreS0[1]}
          <br />
          base 2 without single typings: ranking: {rankScoreD2[0]}, score:{" "}
          {rankScoreD2[1]}
          <br />
          base 2 with single typings: ranking: {rankScoreS2[0]}, score:{" "}
          {rankScoreS2[1]}
        </div>
      <br /><button type="button" onClick={handleTypeRankSubmit}>
        <p>Back to seperate types ranking</p>
      </button><br />
      <Link to="/">Home</Link>
    </div>
  );
}
