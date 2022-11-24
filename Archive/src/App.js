import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>

      </Route>
    </Routes>
    </Router>

  )
}

export default App;