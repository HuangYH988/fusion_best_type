import React from "react";
import "./App.css";
import Display from "./display";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import ErrorPage from "./Error";
import RankingSingle from "./ranking/RankingSingle";
import DisplayRanking from "./ranking/DisplayRanking";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>
          App for finding out what the best type foreach type's denfensive
          counterpart is
        </h2>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/display" element={<Display />} />
            <Route path="/ranking" element={<RankingSingle />} />
            <Route path="/typerank" element={<DisplayRanking />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </header>
      </div>
    );
  }
}
