import React from "react";
import "./App.css";
import Display from "./display";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import ErrorPage from "./Error";
import RankingSingle from "./ranking/RankingSingle";
import DisplayRanking from "./ranking/DisplayRanking";
import DisplayDouble from "./ranking/DisplayDouble";
import RankingDouble from "./ranking/RankingDouble";
import { CoverageHome } from "./coverage/CoverageHome";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>
          App for finding out what the best type for each type's defensive
          counterpart is
        </h2>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/display" element={<Display />} />
            <Route path="/display/coverage" element={<CoverageHome />} />

            <Route path="/ranking" element={<RankingSingle />} />
            <Route path="/ranking_dual" element={<RankingDouble />} />

            <Route path="/typerank" element={<DisplayRanking />} />
            <Route path="/dual" element={<DisplayDouble />} />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </header>
      </div>
    );
  }
}
