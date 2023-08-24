import React, { useState } from "react";
import { type_matchup_base0 } from "../db/data_base0";
import { TYPES } from "../Search";
import { type_matchup_base2 } from "../db/data_base2";
import { Link } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import { multiplyObjects, addingObjects } from "../display";

function areSameTypes(type1, type2) {
  return type1 === type2;
}

function isDuplicateSample(List, type1, type2) {
  // Function checks for each element in list and return true if there is duplicate in type combination
  return List.some(
    (entry) =>
      (areSameTypes(entry.type1, type1) && areSameTypes(entry.type2, type2)) ||
      (areSameTypes(entry.type1, type2) && areSameTypes(entry.type2, type1))
  );
}

const orderList = (objArray) => {
  const sortedItems = objArray.sort((a, b) => b.score - a.score);

  let currentRank = 1;
  let previousScore = null;

  const rankedList = sortedItems.map((item, index) => {
    const { type1, type2, score, matchup } = item;
    if (previousScore !== score) {
      currentRank = index + 1;
      previousScore = score;
    }
    return { type1, type2, matchup, score, rank: currentRank };
  });

  return rankedList;
};

export default function RankingDouble() {
  const [toggle02, setToggle02] = useState("base2"); // State to track which list to display
  const setBase2 = () => {
    setToggle02("base2");
  };

  const setBase0 = () => {
    setToggle02("base0");
  };

  let combo_list = [];
  const db = toggle02 === "base2" ? type_matchup_base2 : type_matchup_base0;

  for (const i in TYPES) {
    const Type = TYPES[i];
    const obj1 = db[Type];

    for (const key in db) {
      if (key !== Type) {
        if (!isDuplicateSample(combo_list, Type, key)) {
          const object2 = db[key];
          const result =
            toggle02 === "base2"
              ? multiplyObjects(obj1, object2)
              : addingObjects(obj1, object2);
          let i = 0;
          for (const matchup in result) {
            i += result[matchup];
          }
          const score = toggle02 === "base2" ? 172 - i : 36 - i;
          combo_list.push({
            type1: Type,
            type2: key,
            matchup: result,
            score: score,
          });
        }
      }
    }
  }
  let combined_list = combo_list;

  // Adding single type scenarios
  for (const type in db) {
    let i = 0;
    const obj = db[type];
    for (const key in obj) {
      if (toggle02 === "base2") {
        i += obj[key] * 2;
      } else {
        if (obj[key] === -2) {
          // immunity
          i -= 3;
        } else {
          i += obj[key];
        }
      }
    }
    const score = toggle02 === "base2" ? 172 - i : 36 - i;
    combined_list.push({
      type1: type,
      type2: null,
      matchup: obj,
      score: score,
    });
  }
  const ranked_combo_list = orderList(combined_list);

  return (
    <div>
      <p>Dual Type rankings {toggle02}:</p>
      <button onClick={setBase2} disabled={toggle02 === "base2"}>
        Display base2
      </button>
      <button onClick={setBase0} disabled={toggle02 === "base0"}>
        Display base0
      </button>
      <br />
      {ranked_combo_list.map((combo, index) => (
        <div>
          {combo.rank}.{" "}
          <ImageDisplay key={`p${index}-${combo.type1}`} type={combo.type1} />
          {combo.type2 ? (
            <ImageDisplay key={`s${index}-${combo.type2}`} type={combo.type2} />
          ) : null}{" "}
          Score: {combo.score}{" "}
        </div>
      ))}
      <button onClick={setBase2} disabled={toggle02 === "base2"}>
        Display base2
      </button>
      <button onClick={setBase0} disabled={toggle02 === "base0"}>
        Display base0
      </button>
      <br />
      <Link to="/ranking">View single type rankings</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
