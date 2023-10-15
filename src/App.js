import React from "react";
import Card from "./components/Card";
import './scss/main.scss';
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import SuccessCard from "./components/SuccessCard";

function App() {
  return (
    <>
          <Router>
          <Routes>
            <Route exact path="/" element={<Card />} />
            <Route path="/success/:email" element={<SuccessCard />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
