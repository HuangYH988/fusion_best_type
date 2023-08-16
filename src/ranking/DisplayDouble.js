import React, { useState } from "react";
import { type_matchup_base0 } from "../db/data_base0";
import { type_matchup_base2 } from "../db/data_base2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import { orderList } from "./RankingSingle";

export default function DisplayDouble() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const type1 = searchParams.get("type1");
  const type2 = searchParams.get("type2");
  const handleTypeRankSubmit = () => {
    navigate(`/typerank?type1=${type1}&type2=${type2}`);
  };
  return (
    <div>
      <button type="button" onClick={handleTypeRankSubmit}>
        Type combination ranking
      </button>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
