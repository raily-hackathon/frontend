import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyQuestions from "./pages/MyQuestions";
import MyTrips from "./pages/MyTrips";
import PlaceDetail from "./pages/PlaceDetail";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-questions" element={<MyQuestions />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
