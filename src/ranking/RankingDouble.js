import React, { useState } from "react";
import { type_matchup_base0 } from "../db/data_base0";
import { type_matchup_base2 } from "../db/data_base2";
import { Link } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import { multiplyObjects, addingObjects } from "../display";



export default function RankingDouble() {
  return (
    <div>
      <p>Dual Type rankings:</p>
      <p>Under construction</p>
      <Link to="/ranking">View single type rankings</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
