import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { NAV } from "./constants/nav_constants";
import Home from "./pages/Home";
import SummonerBlock from "./pages/SummonerBlock";
import SummonersPage from "./pages/SummonersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={NAV.HOME.path} element={<Home />} />
          <Route path={NAV.SUMMONER_PAGE.path} element={<SummonersPage />} />
          {/* Add more routes here */}
          <Route path={NAV.SUMMONER_NAME.path} element={<SummonerBlock />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;