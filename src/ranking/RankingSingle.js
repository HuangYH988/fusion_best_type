import React, { useState } from "react";
import { type_matchup_base0 } from "../db/data_base0";
import { type_matchup_base2 } from "../db/data_base2";
import { Link } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";

export const defence2 = () => {
  let list = {};
  let i = 0;
  const json = type_matchup_base2;
  for (const key in json) {
    for (const matchup in json[key]) {
      i += json[key][matchup];
    }
    const positive_score = 86 - i;
    //const average_2dp = Number((i / 18).toFixed(2));
    list[key] = positive_score;
    i = 0;
  }

  return list;
};
export const defence0 = () => {
  let list = {};
  let i = 0;
  const json = type_matchup_base0;
  for (const key in json) {
    for (const matchup in json[key]) {
      i += json[key][matchup];
    }
    const positive_score = 36 - i;
    //const average_2dp = Number((i / 18).toFixed(2));
    list[key] = positive_score;
    i = 0;
  }

  return list;
};

export const attack2 = () => {
  let list = {};
  //let i = 0;
  const json = type_matchup_base2;
  for (const key in json) {
    list[key] = 0;
  }
  for (const key in json) {
    for (const matchup in json[key]) {
      list[matchup] += json[key][matchup];
    }

    // i++;
    // if (i === 18) {
    //   for (const key in list) {

    //     const average_2dp = (list[key] / 18).toFixed(2);
    //     list[key] = average_2dp;
    //   }
    // }
  }

  return list;
};
export const attack0 = () => {
  let list = {};
  let i = 0;
  const json = type_matchup_base0;
  for (const key in json) {
    list[key] = 0;
  }
  for (const key in json) {
    for (const matchup in json[key]) {
      list[matchup] += json[key][matchup];
    }

    i++;
    if (i === 18) {
      for (const key in list) {
        const positive_score = list[key] + 36;
        //const average_2dp = (list[key] / 18).toFixed(2);
        list[key] = positive_score;
      }
    }
  }

  return list;
};

export const orderList = (obj) => {
  const entries = Object.entries(obj);

  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  let currentRank = 1;
  let previousValue = null;

  const rankedList = sortedEntries.map((entry, index) => {
    const [key, value] = entry;
    if (previousValue !== value) {
      currentRank = index + 1;
      previousValue = value;
    }
    return [key, value, currentRank];
  });

  return rankedList;
};

export default function RankingSingle() {
  const [toggle02, setToggle02] = useState("base2"); // State to track which list to display
  const [toggleAD, setToggleAD] = useState("defensive"); // State to track which list to display

  const setBase2 = () => {
    setToggle02("base2");
  };

  const setBase0 = () => {
    setToggle02("base0");
  };

  const setAttack = () => {
    setToggleAD("offensive");
  };

  const setDefend = () => {
    setToggleAD("defensive");
  };

  const listToDisplay =
    toggle02 === "base2"
      ? toggleAD === "defensive"
        ? defence2()
        : attack2()
      : toggleAD === "defensive"
      ? defence0()
      : attack0();
  const rankedList = orderList(listToDisplay);
  return (
    <div>
      {toggleAD} {toggle02}
      <h3>Ranking:</h3>
      <ul>
        {rankedList.map((type, index) => (
          <li key={type[0]}>
            {type[2]}.{"  "}
            <ImageDisplay key={index} type={type[0]} />: {type[1]}
          </li>
        ))}
      </ul>
      <button onClick={setBase2} disabled={toggle02 === "base2"}>
        Display base2
      </button>
      <button onClick={setBase0} disabled={toggle02 === "base0"}>
        Display base0
      </button>
      <br />
      <button onClick={setAttack} disabled={toggleAD === "offensive"}>
        Display offence-oriented
      </button>
      <button onClick={setDefend} disabled={toggleAD === "defensive"}>
        Display defence-oriented
      </button>
      <br />
      <Link to="/ranking_dual">View dual type rankings</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
